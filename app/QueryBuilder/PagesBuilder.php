<?php

namespace App\QueryBuilder;

use App\Models\Burger;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use TCG\Voyager\Models\Page;

final class PagesBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Page::query();
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
    public function get(string $title): Collection
    {
        return $this->model->where('title',$title)->get();
    }
}
