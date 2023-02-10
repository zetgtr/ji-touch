<?php

declare(strict_types=1);

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\QueryBuilder\CategoriesBuilder;
use Illuminate\Http\Request;
use Illuminate\View\View;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return View
     */
    public function __invoke(Request $request, CategoriesBuilder $categoriesBuilder): View
    {
        return view('accounts.index',['category'=>$categoriesBuilder->getAll()]);
    }
}
