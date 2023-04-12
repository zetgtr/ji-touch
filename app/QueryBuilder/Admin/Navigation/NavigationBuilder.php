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

    public function getAll(): Collection
    {
        return $this->navigation->get();
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


}
