<?php

namespace App\Http\Controllers\Admin\Packages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
            $package = "zetgtr/".$database->getReference('/packages/'.$request->input("packages_install")."/name")->getValue();
        $output = exec("composer require $package",$outputArray, $returnValue);
        dd("composer require $package");
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
