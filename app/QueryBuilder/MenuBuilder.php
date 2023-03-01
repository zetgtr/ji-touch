<?php

namespace App\QueryBuilder;

use App\Enums\MenuEnums;
use App\Models\Admin\Menu;
use Illuminate\Database\Eloquent\Collection;

class MenuBuilder extends QueryBuilder
{
    public function __construct()
    {
        $this->model = Menu::query();
    }

    public function getLinks(string $key)
    {
        $links = [MenuEnums::LEFT->value => ['url'=> route('admin.menu.show', ['menu'=>MenuEnums::LEFT]), 'name' => 'Левое меню'],
            MenuEnums::RIGHT->value => ['url'=> route('admin.menu.show', ['menu'=>MenuEnums::RIGHT]),  'name' => 'Правое меню']];
        $links[$key]['active'] = true;
        return $links;
    }

    private function setMenuOrder(array $menu)
    {


    }

    public function setOrder(array $menus, int $parent = null)
    {
        foreach ($menus as $key=>$menu)
        {
            $this->model->where('id',$menu['id'])->update(['parent'=>$parent,'order'=>$key]);
            $this->model = Menu::query();
            if(!empty($menu['children']))
            {
                $this->setOrder($menu['children'], $menu['id']);
            }
        }
    }

    private function setMenuParent(string|MenuEnums $menu,Collection $items)
    {
        foreach ($items as $item)
        {
            $this->model = Menu::query();
            $item->parent = $this->model->where('position','=',$menu)->where('parent','=',$item->id)->orderBy('order')->get();
            $this->setMenuParent($menu,$item->parent);
        }

        return $items;
    }

    public function getMenu(string|MenuEnums $menu): Collection
    {
        $menus = $this->model->where('position','=',$menu)->where('parent','=',null)->orderBy('order')->get();
        return $this->setMenuParent($menu, $menus);
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
