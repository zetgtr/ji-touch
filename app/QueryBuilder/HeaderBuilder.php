<?php

namespace App\QueryBuilder;

use App\Models\Header;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

final class HeaderBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Header::query();
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
