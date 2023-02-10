<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\News;
use App\QueryBuilder\CategoriesBuilder;
use App\QueryBuilder\NewsBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(int $id,NewsBuilder $newsBuilder, CategoriesBuilder $categoriesBuilder): View
    {
        return \view('news.news', [
            'news'=>$newsBuilder->getCategoriesNews($id),
            'id' => $id,
            'category'=>$categoriesBuilder->getAll()
        ]);
    }

    public function show(Request $request,int $id,NewsBuilder $newsBuilder, CategoriesBuilder $categoriesBuilder): View
    {
        return \view('news.show', ['news'=>$newsBuilder->get($id),
            'showForm'=>\view('components.form.showNews',['id'=>$id]),
            'status'=> $request->query('status'),
            'category'=>$categoriesBuilder->getAll()]);
    }
}
