<?php

namespace App\View\Components\admin\news;

use App\QueryBuilder\Admin\News\CategoryBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Content extends Component
{
    private Collection $categories;
    /**
     * Create a new component instance.
     */
    public function __construct(CategoryBuilder $categoryBuilder)
    {
        $this->categories = $categoryBuilder->getAll();
    }


    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.news.content',['categories'=>$this->categories]);
    }
}
