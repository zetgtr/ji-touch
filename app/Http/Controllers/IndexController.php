<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\QueryBuilder\CategoriesBuilder;
use App\QueryBuilder\NewsBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(NewsBuilder $newsBuilder, CategoriesBuilder $categoriesBuilder): View
    {
        return \view("news.index", [
            'news'=>$newsBuilder->getAll(),
            'sport'=>$newsBuilder->getCategoriesNews(3),
            'category'=>$categoriesBuilder->getAll()]);
    }
}
