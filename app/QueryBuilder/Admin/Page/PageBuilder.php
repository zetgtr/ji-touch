<?php

namespace App\QueryBuilder\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;

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
            $item->alias = Str::camel(str_slug($item->title));
            if (count($parent) > 0) {
                $item->parent = $parent;
                $item->children = $parent;
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
        $alias = Str::camel(str_slug($page->title));
        $pageContent = view("template.page.page",[
            'panelList' => $panelList,
            'name' => $alias."Page"
        ])->render();
        file_put_contents(resource_path('react/pages/panels')."/".$alias."Page.jsx", $pageContent);
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }

    public function delete($pageCreate)
    {
        $panelValue = Str::camel(str_slug($pageCreate->title));
        $pageFile = resource_path('react/pages/panels').'/' . $panelValue.'Page.jsx';
        if(file_exists($pageFile))
        {
            unlink($pageFile);
        }
    }
}
