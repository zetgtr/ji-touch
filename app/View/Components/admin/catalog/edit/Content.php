<?php

namespace App\View\Components\admin\catalog\edit;

use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Content extends Component
{
    public function __construct(CatalogBuilder $catalogBuilder,$category)
    {
        $this->categories = $catalogBuilder->getCategoryAll();
        $this->category = $category;
    }

    public function render(): View
    {
        return view('components.admin.catalog.edit.content', ['categories'=>$this->categories,'category'=>$this->category]);
    }
}
