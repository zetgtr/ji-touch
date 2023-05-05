<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Enums\CatalogEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Catalog\Product\CreateRequest;
use App\Http\Requests\Admin\Catalog\Product\UpdateRequest;
use App\Models\Admin\Catalog\Category;
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

    public function search(string $text, CatalogBuilder $catalogBuilder)
    {
        return $catalogBuilder->search($text);
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
        $data = $catalogBuilder->getProductCategory($id);
//        dd($catalogBuilder->getProductBreadcrumb($id));
        return view('admin.catalog.product.show',[
            'links' => $catalogBuilder->getNavigationLinks(CatalogEnums::PRODUCT->value),
            'categories'=>$data['category'],
            'category' => $id,
            'products' => $data['products'],
            'breadcrumb' => $catalogBuilder->getProductBreadcrumb($id)
            ]);
    }

    public function order(Request $request, CatalogBuilder $catalogBuilder){
        $catalogBuilder->setOrderProduct($request->all()['items'],$request->all()['category']);
    }

    public function publish(Product $product,Request $request)
    {
        $category = Category::find($request->get('category'));
        $category->products()->updateExistingPivot($product->id, ['publish' => ! $category->products()->where('id', $product->id)->first()->pivot->publish]);
        if ($category->save()) return ['status' => true, 'publish' =>  $category->products()->where('id', $product->id)->first()->pivot->publish];
        else  return ['status' => false];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product,CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.product.edit',[
            'links' => $catalogBuilder->getNavigationLinks(CatalogEnums::PRODUCT->value),
            'product'=>$product,
            'navigation' => $catalogBuilder->getNavigationPageLink(CatalogEnums::CONTENT->value)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Product $product)
    {
        $product = $product->fill($request->validated());
        if ($product->save()) {
            $product->categories()->sync($request->getCategoriesIds());
            return \redirect()->route('admin.catalog.product.edit',['product'=>$product])->with('success', __('messages.admin.catalog.product.update.success'));
        }

        return \back()->with('error', __('messages.admin.catalog.product.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try {
            $product->delete();
            $response = ['status' => true,'message' => __('messages.admin.catalog.product.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.catalog.product.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
