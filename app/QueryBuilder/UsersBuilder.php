<?php

declare(strict_types=1);

namespace App\QueryBuilder;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;

class UsersBuilder extends QueryBuilder
{

    public Builder $model;

    public function __construct()
    {
        $this->model = User::query();
    }

    public function getUsersWithPagination(int $quantity = 10): LengthAwarePaginator
    {
        return $this->model->orderByDesc('id')->paginate($quantity);
    }

    public function get(int $id): Collection
    {
        return $this->model->where('id', $id)->get();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }
}
