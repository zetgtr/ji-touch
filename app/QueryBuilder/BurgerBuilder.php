<?php

namespace App\QueryBuilder;

use App\Models\Burger;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final class BurgerBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Burger::query();
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }

}
