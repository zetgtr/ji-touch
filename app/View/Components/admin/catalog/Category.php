<?php

namespace App\View\Components\admin\catalog;

use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Category extends Component
{
    public function __construct(CatalogBuilder $catalogBuilder)
    {
        $this->categories = $catalogBuilder->getCategory();
    }

    public function render(): View
    {
        return view('components.admin.catalog.category', ['categories'=>$this->categories]);
    }
}
