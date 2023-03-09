<?php

namespace App\View\Components\admin\news;

use App\QueryBuilder\Admin\News\CategoryBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;
use \App\Models\Admin\News\News;

class EditContent extends Component
{
    private Collection $categories;
    private News $news;
    /**
     * Create a new component instance.
     */
    public function __construct(CategoryBuilder $categoryBuilder,News $news)
    {
        $this->categories = $categoryBuilder->getAll();
        $this->news = $news;
    }


    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        if(count($this->news->categories()->pluck('id')))
            $categoryNews = $this->news->categories()->pluck('id')[0];
        else $categoryNews = 1;
        return view('components.admin.news.edit-content',['categories' => $this->categories,'news' => $this->news, 'categoryNews'=>$categoryNews]);
    }
}
