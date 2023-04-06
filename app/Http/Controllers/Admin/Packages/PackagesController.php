<?php

namespace App\Http\Controllers\Admin\Packages;

use App\Enums\PackagesEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Packages\EditRequest;
use App\Models\Admin\Packages\Packages;
use App\QueryBuilder\Admin\Packages\PackagesBuilder;
use Composer\Installers\Installer;
use Gitlab\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Composer;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\ProcessUtils;
use News\Remove\RemovePackage;
use Symfony\Component\Process\PhpExecutableFinder;


class PackagesController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(PackagesBuilder $packagesBuilder)
    {
        return view('admin.packages.index', [
            'packages'=>$packagesBuilder->getPackages(),
            'packagesInstall' => $packagesBuilder->getInstall(),
            'links'=>$packagesBuilder->getLink(PackagesEnums::EDIT->value)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->merge(['publish'=>false]);
        $database = app('firebase.database');
        $ref = $database->getReference('/packages');
        if($ref->push($request->all()))
        {
            return \redirect()->route('admin.packages.index')->with('success', "Пакет успешно добавлен");
        }else{
            return \redirect()->route('admin.packages.index')->with('error', "Ошибка добавления");
        }
    }

    public function setData(Request $request, PackagesBuilder $packagesBuilder)
    {
        $packagesBuilder->setData($request->input('id'));
        return \redirect()->route('admin.packages.index')->with('success', "Пакет успешно установлен");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, PackagesBuilder $packagesBuilder)
    {
        if($request->input("packages_install"))
        {
            if(Packages::query()->where('id_package',$request->input("packages_install"))->first())
                return \redirect()->route('admin.packages.index')->with('error', "Пакет уже установлен");
            if($packagesBuilder->install($request) == 0)
            {
                return \redirect()->route('admin.packages.set-data',['id'=>$request->input("packages_install")]);
            }
            return \redirect()->route('admin.packages.index')->with('error', "Ошибка установки пакета");
        }
        return \redirect()->route('admin.packages.index')->with('error', "Не выбран пакет для установки");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, PackagesBuilder $packagesBuilder)
    {
        return $packagesBuilder->show($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, EditRequest $request, PackagesBuilder $packagesBuilder)
    {
        if($packagesBuilder->edit($id, $request))
        {
            return \redirect()->route('admin.packages.index')->with('success', "Пакет успешно обновлен");
        }
        return \redirect()->route('admin.packages.index')->with('error', "Ошибка обновления пакета");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id,PackagesBuilder $packagesBuilder, Request $request)
    {
        if($packagesBuilder->remove($request->input("packages")))
        {
            return \redirect()->route('admin.packages.index')->with('success', "Пакет успешно удален");
        }
        return \redirect()->route('admin.packages.index')->with('success', "Ошибка удаления пакета");
    }
}
