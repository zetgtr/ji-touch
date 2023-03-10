<?php

namespace App\QueryBuilder\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class PageBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = PageCreate::query();
    }

    public function setOrder(array $pages, int $parent = null)
    {
        foreach ($pages as $key=>$page)
        {
            $this->model->where('id',$page['id'])->update(['parent'=>$parent,'order'=>$key]);
            $this->model = PageCreate::query();
            if(!empty($page['children']))
            {
                $this->setOrder($page['children'], $page['id']);
            }
        }
    }

    private function setPagesParent(Collection $items)
    {


        foreach ($items as $item)
        {
            $this->model = PageCreate::query();
            $parent = $this->model->where('parent','=',$item->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $item->parent = $parent;
                $this->setPagesParent($item->parent);
            }
        }

        return $items;
    }

    public function getPagesParent(): Collection
    {
        $pages = $this->model->where('parent','=',null)->orderBy('order')->get();
        return $this->setPagesParent($pages);
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
