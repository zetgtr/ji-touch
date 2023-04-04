<?php

namespace App\Http\Controllers\Admin\Packages;

use App\Http\Controllers\Controller;
use Composer\Installers\Installer;
use Gitlab\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Composer;
use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\ProcessUtils;
use Symfony\Component\Process\PhpExecutableFinder;


class PackagesController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $database = app('firebase.database');
        return view('admin.packages.index', ['packages'=>$database->getReference('/packages')->getValue()]);
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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $database = app('firebase.database');
        if($request->input("packages_install"))
        {
            $package = "zetgtr/".$database->getReference('/packages/'.$request->input("packages_install")."/name")->getValue();
            $gitlabUrl = 'gitlab.com';
//        $gitlabToken = 'glpat-mWhpFrtPiCdqxxencz93';
//        $gitlabProjectId = '44872977';
//        $gitlabUsername = "zetgtr";
//        $packageName = "news";
//
//        $gitlab = new Client();
//        $gitlab->authenticate($gitlabToken, Client::AUTH_HTTP_TOKEN);
//        $gitlabUrl = 'gitlab.com';
//        $gitlabToken = 'glpat-mWhpFrtPiCdqxxencz93';
//        $gitlabProjectId = '44872977';
//        $gitlabUsername = "zetgtr";
//        $packageName = "news";
//
            $composerJson = json_decode(File::get(base_path('composer.json')), true);

            $composerJson['repositories'][] = [
                "type" => "vcs",
                "url" => "https://{$gitlabUrl}/$package",
            ];

            File::put(base_path('composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT));

            chdir(base_path());
            exec('C:\laragon\bin\php\php-8.1.10-Win32-vs16-x64\php.exe C:\laragon\bin\composer\composer.phar require '.$package.' 2>&1', $msg, $resultCode);
        }



    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $database = app('firebase.database');
        $data = $database->getReference('/packages/'.$id)->getValue();
        if ($data)
        {
            $data['status'] = true;
        }else{
            $data['status'] = false;
        }
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, Request $request)
    {
        $database = app('firebase.database');
        if($database->getReference('/packages/'.$id)->update($request->all()))
        {
            return \redirect()->route('admin.packages.index')->with('success', "Пакет успешно обновлен");
        }
        return \redirect()->route('admin.packages.index')->with('error', "Ошибка обновления пакетаы");
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
    public function destroy(string $id)
    {
        //
    }
}
