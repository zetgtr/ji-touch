<?php

declare(strict_types=1);

namespace App\QueryBuilder;

use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

final class CategoriesBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Category::query();
    }

    public function getCategoriesWithPagination(int $quantity = 10): LengthAwarePaginator
    {
        return $this->model->orderByDesc('id')->paginate($quantity);
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
