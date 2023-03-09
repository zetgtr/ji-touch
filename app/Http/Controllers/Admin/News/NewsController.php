<?php

namespace App\Http\Controllers\Admin\News;

use App\Enums\NewsEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\News\CreateRequest;
use App\Http\Requests\Admin\News\UpdateRequest;
use App\Models\Admin\News\News;
use App\QueryBuilder\NewsBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(NewsBuilder $newsBuilder)
    {
        return view('admin.news.index',[
            'links' => $newsBuilder->getLinks(NewsEnums::NEWS->value)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(NewsBuilder $newsBuilder)
    {
        return view('admin.news.create',[
            'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
            'links' => $newsBuilder->getLinks(NewsEnums::POST->value)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request): RedirectResponse
    {
        $news = News::create($request->validated());
        if ($news) {
            $news->categories()->attach($request->getCategoriesIds());
            return \redirect()->route('admin.news.create')->with('success', __('messages.admin.news.store.success'));
        }

        return \redirect()->route('admin.news.create')->with('error', __('messages.admin.news.store.fail'));
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $news->publish = !$news->publish;
        if ($news->save()) return ['status' => true, 'publish' => $news->publish];
        else  return ['status' => false];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, NewsBuilder $newsBuilder)
    {
        $news->images = json_decode($news->images);
        return view('admin.news.edit',[
            'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
            'links' => $newsBuilder->getLinks(null),
            'news' => $news
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, News $news)
    {
        $news = $news->fill($request->validated());
        if ($news->save()) {
            $news->categories()->sync($request->getCategoriesIds());
            return \redirect()->route('admin.news.edit',['news'=>$news])->with('success', __('messages.admin.news.update.success'));
        }

        return \back()->with('error', __('messages.admin.news.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        try {
            $news->delete();
            $response = ['status' => true,'message' => __('messages.admin.news.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.news.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
