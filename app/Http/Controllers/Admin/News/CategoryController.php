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
        return view('admin.news.news',[
            'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
            'links' => $newsBuilder->getLinks(NewsEnums::CATEGORY->value)
        ]);
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
    public function store(CategoryRequest $request, NewsBuilder $newsBuilder)
    {
        Category::create($request->validated());
        return view('admin.news.news',[
            'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
            'links' => $newsBuilder->getLinks(NewsEnums::CATEGORY->value)
        ]);
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
            return view('admin.news.news',[
                'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
                'links' => $newsBuilder->getLinks(NewsEnums::CATEGORY->value)
            ]);
        }

        return view('admin.news.news',[
            'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
            'links' => $newsBuilder->getLinks(NewsEnums::CATEGORY->value)
        ]);
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
