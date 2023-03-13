<?php

namespace App\QueryBuilder;

use App\Models\Admin\Roles;
use App\Models\Admin\Roles\RolesHasMenus;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class RolesBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = Roles::query();
    }

    public function setRolesMenu(int $menuId, int $roleId)
    {
        $record = RolesHasMenus::updateOrCreate(
            ['menu_id' => $menuId, 'role_id' => $roleId]
        );

        // Меняем значение show на противоположное, если запись уже существует
        if ($record->wasRecentlyCreated) {
            $record->show = true;
        } else {
            $record->show = !$record->show;
        }

        RolesHasMenus::query()->where('menu_id' , $menuId)->where('role_id' , $roleId)->update(['show'=>$record->show]);
        return $record->show;
    }

    public function get(){
        return $this->model->where('id','!=',1)->get();
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
