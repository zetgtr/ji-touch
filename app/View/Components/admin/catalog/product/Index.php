<?php

namespace App\View\Components\admin\catalog\product;

use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Index extends Component
{
    public function __construct(CatalogBuilder $catalogBuilder)
    {
        $this->categories = $catalogBuilder->getCategory();
    }

    public function render(): View
    {
        return view('components.admin.catalog.product.index',['categories'=>$this->categories]);
    }
}
