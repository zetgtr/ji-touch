<?php

namespace App\Http\Controllers\Admin\News;

use App\Enums\NewsEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\News\CategoryRequest;
use App\Models\Admin\News\Category;
use App\QueryBuilder\NewsBuilder;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(NewsBuilder $newsBuilder)
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(NewsBuilder $newsBuilder)
    {
        return view('admin.news.category',[
            'links' => $newsBuilder->getLinks(NewsEnums::CATEGORY->value)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request, NewsBuilder $newsBuilder)
    {
        $category = Category::create($request->validated());
        if ($category) {
            return \redirect()->route('admin.news.category.create')->with('success', __('messages.admin.category.store.success'));
        }

        return \back()->with('error', __('messages.admin.category.store.fail'));
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
    public function edit(Category $category)
    {
        if(!$category)
        {
            return ['status'=>false, 'message'=>'Ошибка. Попробуйте позже'];
        }
        return ['status'=>true,'category'=>$category];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, Category $category, NewsBuilder $newsBuilder)
    {
        $category = $category->fill($request->validated());
        if ($category->save()) {
            return \redirect()->route('admin.news.category.create')->with('success', __('messages.admin.category.update.success'));
        }

        return \back()->with('error', __('messages.admin.category.update.fail'));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        try {
            $category->delete();
            $response = ['status' => true,'message' => __('messages.admin.news.destroy.success')];
        } catch (\Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.news.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
