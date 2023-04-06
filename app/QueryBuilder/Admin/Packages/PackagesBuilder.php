<?php

namespace App\QueryBuilder\Admin\Packages;

use App\Enums\PackagesEnums;
use App\Http\Requests\Admin\Packages\EditRequest;
use App\Models\Admin\Packages\Packages;
use App\Models\Admin\Packages\Settings;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use News\Remove\RemovePackage;

class PackagesBuilder extends QueryBuilder
{

    private $firebase;

    private Builder $settings;

    public function __construct()
    {
        $this->firebase = app('firebase.database');
        $this->settings = Settings::query();
    }

    public function getLink($key)
    {
        $links = [PackagesEnums::EDIT->value => ['url'=> route('admin.packages.index'), 'name' => 'Редактировать'],
            PackagesEnums::SETTINGS->value => ['url'=> route('admin.packages_settings.index'),  'name' => 'Настройки']
        ];

        $links[$key]['active'] = true;

        return $links;
    }

    public function getPackages()
    {
        return $this->firebase->getReference('/packages')->getValue();
    }
    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }

    public function getSettings()
    {
        return $this->settings->find(1);
    }

    public function install($request)
    {
        $id = $request->input("packages_install");
        $settings = $this->getSettings();
        $package = $settings->user."/".$this->firebase->getReference('/packages/'.$id."/name")->getValue();
//        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();

        $composerJson = json_decode(File::get(base_path('composer.json')), true);

        $composerJson['repositories'][] = [
            "type" => "vcs",
            "url" => "https://{$settings->url}/$package",
        ];

        File::put(base_path('composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT));

        chdir(base_path());
        exec($settings->php.'\php.exe '.$settings->composer.'\composer.phar require '.$package.' 2>&1', $msg, $resultCode);
        if($resultCode == 0)
        {
            $this->firebase->getReference('/packages/'.$id."/publish")->set(true);
        }
        Packages::query()->create(['id_package'=>$id]);
        return 0;
    }

    public function setData($id)
    {
        $settings = $this->getSettings();
        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();
        if($packageData['migration']) {
            chdir(base_path());
            exec($settings->php.'\php.exe artisan vendor:publish --tag=migrations 2>&1',$msg);
            Artisan::call('migrate', ['--verbose' => true]);
        }
        if($packageData['seeder'])
        {
            Artisan::call('db:seed', [
                '--class' => $packageData['name_seeder'],
            ]);
        }
    }

    public function edit(string $id, EditRequest $request)
    {
        return $this->firebase->getReference('/packages/'.$id)->update($request->validated());
    }

    public function show(string $id)
    {
        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();
        if ($packageData)
        {
            $packageData['status'] = true;
        }else{
            $packageData['status'] = false;
        }
        return $packageData;
    }

    public function getInstall()
    {
        return Packages::query()->get();
    }

    public function remove(string $id)
    {
        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();
        $packageRemove = new $packageData['delete']();

    }


}
