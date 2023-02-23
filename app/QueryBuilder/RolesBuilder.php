<?php

namespace App\QueryBuilder;

use App\Models\Admin\Roles;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class RolesBuilder extends QueryBuilder
{

    public Builder $model;

    public function __construct()
    {
        $this->model = Roles::query();
    }
    function getAll(): Collection
    {
        return $this->model->get();
    }
}
