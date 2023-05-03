<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Enums\CatalogEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Catalog\Product\CreateRequest;
use App\Models\Admin\Catalog\Product;
use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Http\Request;

class CatalogProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.product.index',['links' => $catalogBuilder->getNavigationLinks(CatalogEnums::PRODUCT->value)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.product.create',[
            'links' => $catalogBuilder->getNavigationLinks(CatalogEnums::PRODUCT->value),
            'navigation' => $catalogBuilder->getNavigationPageLink(CatalogEnums::CONTENT->value)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $request)
    {
        $product = Product::create($request->validated());
        if ($product) {
            $product->categories()->sync($request->getCategoriesIds());
            return \redirect()->route('admin.catalog.product.index')->with('success', __('messages.admin.catalog.product.store.success'));
        }
        return \redirect()->route('admin.catalog.product.create')->with('error', __('messages.admin.catalog.product.store.fail'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id,CatalogBuilder $catalogBuilder)
    {
         return view('admin.catalog.product.show',['links' => $catalogBuilder->getNavigationLinks(CatalogEnums::PRODUCT->value)]);
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
