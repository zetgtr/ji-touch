<?php

namespace App\View\Components\admin\menu;

use App\QueryBuilder\MenuBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class menu extends Component
{

    private Collection $menu;
    /**
     * Create a new component instance.
     */
    public function __construct(MenuBuilder $menuBuilder)
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.menu.menu');
    }
}
