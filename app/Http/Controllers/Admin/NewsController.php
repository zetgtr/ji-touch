<?php

declare(strict_types=1);

namespace App\Http\Controllers\admin;

use App\Enums\NewsStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\News\CreateRequest;
use App\Http\Requests\News\EditRequest;
use App\Models\News;
use App\QueryBuilder\CategoriesBuilder;
use App\QueryBuilder\NewsBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules\Enum;
use PHPUnit\Exception;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param NewsBuilder $newsBuilder
     * @return View
     */
    public function index(NewsBuilder $newsBuilder): View
    {
        return \view('admin.news.index', [
            'newsList' => $newsBuilder->getNewsWithPagination(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param CategoriesBuilder $categoriesBuilder
     * @return View
     */
    public function create(CategoriesBuilder $categoriesBuilder): View
    {
        return \view('admin.news.create', [
            'categories' => $categoriesBuilder->getAll(),
            'statuses' => NewsStatus::all(),
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
            return \redirect()->route('admin.news.index')->with('success', __('messages.admin.news.store.success'));
        }

        return \back()->with('error', __('messages.admin.news.store.fail'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param News $news
     * @param CategoriesBuilder $categoriesBuilder
     * @return View
     */
    public function edit(News $news, CategoriesBuilder $categoriesBuilder): View
    {
        return \view('admin.news.edit', [
            'news' => $news,
            'categories' => $categoriesBuilder->getAll(),
            'statuses' => NewsStatus::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EditRequest $request
     * @param News $news
     * @return RedirectResponse
     */
    public function update(EditRequest $request, News $news): RedirectResponse
    {
        $news = $news->fill($request->validated());
        if ($news->save()) {
            $news->categories()->sync($request->getCategoriesIds());
            return \redirect()->route('admin.news.index')->with('success', __('messages.admin.news.update.success'));
        }

        return \back()->with('error', __('messages.admin.news.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param News $news
     * @return array
     */

    public function destroy(News $news): array
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
