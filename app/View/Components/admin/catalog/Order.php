<?php

namespace App\View\Components\admin\catalog;

use App\QueryBuilder\Admin\Catalog\CatalogBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Order extends Component
{
    public function __construct(CatalogBuilder $catalogBuilder)
    {
        $this->orders = $catalogBuilder->getOrder();
    }

    public function render(): View
    {
        return view('components.admin.catalog.order',['orders' => $this->orders]);
    }
}
