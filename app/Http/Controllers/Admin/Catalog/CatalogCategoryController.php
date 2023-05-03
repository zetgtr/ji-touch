<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Enums\CatalogEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Catalog\Category\CreateRequest;
use App\Http\Requests\Admin\Catalog\Category\UpdateRequest;
use App\Models\Admin\Catalog\Category;
use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Http\Request;

class CatalogCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.category.index',['links' => $catalogBuilder->getNavigationLinks(CatalogEnums::CATEGORY->value)]);
    }

    public function order(Request $request, CatalogBuilder $catalogBuilder){
        $catalogBuilder->setOrder($request->all()['items']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.category.create',[
            'links' => $catalogBuilder->getNavigationLinks(),
            'navigation' => $catalogBuilder->getNavigationPageLink(CatalogEnums::CONTENT->value)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $request)
    {
        $category = Category::create($request->validated());
        if ($category) {
            return \redirect()->route('admin.catalog.category.create')->with('success', __('messages.admin.catalog.category.store.success'));
        }

        return \redirect()->route('admin.catalog.category.create')->with('error', __('messages.admin.catalog.category.store.fail'));
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
    public function edit(Category $category,CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.category.edit',[
            'links' => $catalogBuilder->getNavigationLinks(),
            'navigation' => $catalogBuilder->getNavigationPageLink(CatalogEnums::CONTENT->value),
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Category $category)
    {
        $category = $category->fill($request->validated());
        if ($category->save()) {
            return \redirect()->route('admin.catalog.category.edit',['category'=>$category])->with('success', __('messages.admin.catalog.category.update.success'));
        }

        return \back()->with('error', __('messages.admin.catalog.category.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
