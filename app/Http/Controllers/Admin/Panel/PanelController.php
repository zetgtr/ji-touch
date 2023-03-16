<?php

namespace App\Http\Controllers\Admin\Panel;

use App\Enums\PanelNavigationEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Panel\CreateRequest;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Illuminate\Http\Request;

class PanelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PanelBuilder $panelBuilder)
    {
        return view('admin.panel.index',['links' => $panelBuilder->getLinks(PanelNavigationEnums::SITE->value)]);
    }

    public function getAllPanel(PanelBuilder $panelBuilder)
    {
        return ['status'=>true,'content'=>$panelBuilder->getPanelAll()];
    }
    public function getSelectTable(PanelBuilder $panelBuilder,Request $request)
    {
        return $panelBuilder->getSelectTable($request);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.panel.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $createRequest)
    {
        $panel = Panel::create($createRequest->validated());
        if ($panel) {
            return true;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PanelBuilder $panelBuilder, Panel $panel)
    {
        return view('admin.panel.edit',['panel' => $panel]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
