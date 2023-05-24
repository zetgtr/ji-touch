<?php

namespace App\QueryBuilder\Admin\Navigation;

use App\Enums\NavigationEnums;
use App\Models\Admin\Navigation\Navigation;
use App\Models\Admin\Navigation\NavigationList;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class NavigationBuilder extends QueryBuilder
{
    public Builder $navigation;
    private Builder $navigationList;

    public function __construct()
    {
        $this->navigation = Navigation::query();
        $this->navigationList = NavigationList::query();
    }
    public function setList(Collection $lists, $id)
    {
        $navigationList = NavigationList::query()->find($id);
        foreach ($lists as $key => $list)
        {
            $parent = $navigationList->links()->where('parent', '=', $list->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $list->parent = $parent;
                $list->children = $this->setList($parent, $id);
            }
        }

        return $lists;
    }
    public function getAll(): Collection
    {
        return $this->navigation->get();
    }

    public function getNavigationLinks($navigationListId)
    {
        return $this->navigation->whereDoesntHave('list', function ($query) use ($navigationListId) {
            $query->where('navigation_list_id', $navigationListId);
        })->get();
    }

    public function getLink(?string $key)
    {

        $links = [NavigationEnums::LIST->value => ['url'=> route('admin.navigation_list.index'), 'name' => 'Списки'],
            NavigationEnums::LINK->value => ['url'=> route('admin.navigation.index'),  'name' => 'Ссылки']
        ];

        if ($key)
            $links[$key]['active'] = true;

        return $links;
    }

    public function getListAll()
    {
        return $this->navigationList->get();
    }

    private function setOrder(array $pages, int $parent = null,$id)
    {
        foreach ($pages as $key=>$page) {
            $navigation = Navigation::query()->find($page['id']);
            $navigation->list()->detach($id);
            $navigation->list()->attach($id, [
                'order' => $key,
                'parent' => $parent,
            ]);
            if(!empty($page['children']))
            {
                $this->setOrder($page['children'], $page['id'], $id);
            }
        }
        return ['status'=>true,'message'=>$pages];
    }

    public function setLink(array $request, int $id)
    {
        $navigationList = NavigationList::find($id);
        $navigationList->links()->detach();
        if ($request)
        {
            return $this->setOrder($request['items'], null, $id);
        } else {
            return ['status'=>false,'message'=>'Ошибка сохранения'];
        }
    }

    public function getAlias(string $alias)
    {
        $data = $this->navigationList->where('alias',$alias)->first();
        if($data)
            return $this->setList($data->links()->where('parent',null)->orderBy('order')->get(),$data->id);
        else
            return [];
    }


}
