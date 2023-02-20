<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\QueryBuilder\BurgerBuilder;
use App\QueryBuilder\HeaderBuilder;
use App\QueryBuilder\PagesBuilder;
use Illuminate\View\View;
use TCG\Voyager\Models\Post;


class IndexController extends Controller
{
    public function index(Post $post, HeaderBuilder $headerBuilder, BurgerBuilder $burgerBuilder, PagesBuilder $pagesBuilder): view
    {
        return \view("home.index",[
            'post'=>$post,
            'headers' => $headerBuilder->getAll(),
            'burgers'=>$burgerBuilder->getAll(),
            'page' => $pagesBuilder->get("Главная")
        ]);
    }
}
