<?php

namespace App\View\Components\admin\navigation;

use Illuminate\View\Component;

class EditList extends Component
{
    private $navigation;
    private $navigation_link;

    public function __construct($navigation)
    {
        $this->navigation = $navigation;
        $this->navigation
    }

    public function render()
    {
        return view('components.admin.navigation.edit-list',['navigation'=>$this->navigation]);
    }
}
