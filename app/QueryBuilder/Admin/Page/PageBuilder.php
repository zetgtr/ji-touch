<?php

namespace App\QueryBuilder\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\Models\Admin\Panel\Panel;
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

    public function setDataPage($page)
    {
        $data = DataPanel::query()->where('id_page',$page->id)->get();
        $panelList = [];
        foreach ($data as $item)
        {
            $panel = Panel::query()->find($item->id_panel);
            $panelList[] = [
                'component' => ucfirst($panel->alias)."Component",
                'import' => 'import { '.ucfirst($panel->alias).'Component } from ',
                'from' => '../../components/panels/'.$panel->alias
            ];
        }
//        dd($panelList);
        $pageContent = view("template.page.page",[
            'panelList' => $panelList,
            'name' => $page->title."Page"
        ])->render();
        file_put_contents(resource_path('react/pages/panel')."/".$page->title."Page.jsx", $pageContent);
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
