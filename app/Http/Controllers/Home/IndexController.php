<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\QueryBuilder\HeaderBuilder;
use Illuminate\Http\Request;
use Illuminate\View\View;
use TCG\Voyager\Models\Post;


class IndexController extends Controller
{
    public function index(Post $post, HeaderBuilder $headerBuilder): view
    {
        return \view("home.index",['post'=>$post, 'headers' => $headerBuilder->getAll()]);
    }
}
