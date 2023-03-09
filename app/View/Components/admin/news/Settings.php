<?php

namespace App\View\Components\admin\news;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use \App\Models\Admin\News\Settings as NewsSettings;

class Settings extends Component
{
    private NewsSettings $settings;
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->settings = NewsSettings::query()->find(1);
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.news.settings',['settings'=>$this->settings]);
    }
}
