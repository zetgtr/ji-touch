<?php

namespace App\View\Components\admin\roles;

use App\QueryBuilder\MenuBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Edit extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(MenuBuilder $menuBuilder)
    {
        $this->menus = $menuBuilder->getMenuRoles();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.roles.edit',['menus'=>$this->menus]);
    }
}
