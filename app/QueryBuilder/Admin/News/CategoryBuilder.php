<?php

namespace App\QueryBuilder\Admin\News;

use App\Models\Admin\News\Category;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class CategoryBuilder extends QueryBuilder
{
    public Builder $model;
    public function __construct()
    {
        $this->model = Category::query();
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
