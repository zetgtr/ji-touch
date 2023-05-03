<?php

namespace App\Http\Controllers\Admin\Catalog;

use App\Enums\CatalogEnums;
use App\Http\Controllers\Controller;
use App\QueryBuilder\Admin\Catalog\CatalogBuilder;

class CatalogOrderController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CatalogBuilder $catalogBuilder)
    {
        return view('admin.catalog.order.index',['links' => $catalogBuilder->getNavigationLinks(CatalogEnums::ORDER->value)]);
    }
}
