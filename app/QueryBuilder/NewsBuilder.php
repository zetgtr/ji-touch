<?php

declare(strict_types=1);

namespace App\QueryBuilder;

use App\Models\News;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final class NewsBuilder extends QueryBuilder
{

    public Builder $model;

    public function __construct()
    {
        $this->model = News::query();
    }

    public function getNewsByStatus(string $status): Collection
    {
        return $this->model->where('status', $status)->get();
    }

    public function getNewsWithPagination(int $quantity = 10): LengthAwarePaginator
    {
        return $this->model->with('categories')->orderByDesc('id')->paginate($quantity);
    }

    public function get(int $id): Collection
    {
        return $this->model->where('id', $id)->get();
    }

    public function getCategoriesNews(int $id): Collection
    {
        return $this->model
            ->join('categories_has_news','news_id','=', 'news.id')
            ->select('news.*')
            ->where('category_id','=', $id)
            ->get();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }
}
