<?php

namespace App\View\Components\admin\news;

use App\QueryBuilder\NewsBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class News extends Component
{
    private Collection $news;
    /**
     * Create a new component instance.
     */
    public function __construct(NewsBuilder $newsBuilder)
    {
        $this->news = $newsBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.news.news',['newsList'=>$this->news]);
    }
}
