<?php

namespace App\View\Components\admin\catalog\product\edit;

use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use App\View\Components\admin\catalog\Category;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Content extends Component
{
    public function __construct(CatalogBuilder $catalogBuilder, $product)
    {
        $this->categories = $catalogBuilder->getCategoryAll();
        $this->product = $product;
    }

    public function render(): View
    {
        return view('components.admin.catalog.product.edit.content',['categories' => $this->categories,'product' => $this->product]);
    }
}
