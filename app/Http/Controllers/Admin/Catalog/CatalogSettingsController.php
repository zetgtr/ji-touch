<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Catalog\Settings\UpdateRequest;
use App\Models\Admin\Catalog\Settings;
use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Http\Request;
use App\Enums\CatalogEnums;
class CatalogSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CatalogBuilder $catalogBuilder)
    {
        return view("admin.catalog.settings.index",['links'=>$catalogBuilder->getNavigationLinks(CatalogEnums::SETTINGS->value)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, int $id)
    {
        $settings = Settings::query()->find(1);
        $product = $settings->fill($request->validated());
        if ($product->save()) {
            return \redirect()->route('admin.catalog.settings.index')->with('success', __('messages.admin.catalog.product.update.success'));
        }

        return \back()->with('error', __('messages.admin.catalog.product.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
