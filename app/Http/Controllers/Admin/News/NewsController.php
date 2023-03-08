<?php

namespace App\Http\Controllers\Admin\News;

use App\Enums\NewsEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\News\CreateRequest;
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
        return view('admin.news.news',[
            'linksContent' => $newsBuilder->getLinksContent(NewsEnums::CONTENT->value),
            'links' => $newsBuilder->getLinks(NewsEnums::NEWS->value)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(NewsBuilder $newsBuilder)
    {
        return view('admin.news.news',[
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
