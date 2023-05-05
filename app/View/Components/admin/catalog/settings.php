<?php

namespace App\View\Components\admin\catalog;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use \App\Models\Admin\Catalog\Settings as Model;

class settings extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->settings = Model::query();
        $this->settings = $this->settings->find(1);
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.catalog.settings',['settings'=>$this->settings]);
    }
}
