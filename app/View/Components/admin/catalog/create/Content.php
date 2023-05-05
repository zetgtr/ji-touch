<?php

namespace App\View\Components\admin\catalog\create;

use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Content extends Component
{
    public function __construct(CatalogBuilder $catalogBuilder)
    {
        $this->categories = $catalogBuilder->getCategoryAll();
    }

    public function render(): View
    {
        return view('components.admin.catalog.create.content', ['categories'=>$this->categories]);
    }
}
