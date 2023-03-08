<?php

namespace App\QueryBuilder;

use App\Enums\NewsEnums;
use App\Models\Admin\News\News;
use Illuminate\Database\Eloquent\Collection;

class NewsBuilder extends QueryBuilder
{
    public function __construct()
    {
        $this->model = News::query();
    }

    public function getLinksContent($key)
    {
        $links = [NewsEnums::CONTENT->value => ['url'=> NewsEnums::CONTENT->value, 'name' => 'Контент'],
            NewsEnums::SEO->value => ['url'=> NewsEnums::SEO->value,  'name' => 'SEO']
        ];

        $links[$key]['active'] = true;

        return $links;
    }
    public function getLinks($key)
    {
        $links = [
            NewsEnums::NEWS->value => ['url'=> NewsEnums::NEWS->value, 'name' => 'Новости'],
            NewsEnums::POST->value => ['url'=> NewsEnums::POST->value,  'name' => 'Пост'],
            NewsEnums::CATEGORY->value => ['url'=> NewsEnums::CATEGORY->value,  'name' => 'Категории'],
            NewsEnums::SETTINGS->value => ['url'=> NewsEnums::SETTINGS->value,  'name' => 'Настройки']
        ];

        $links[$key]['active'] = true;

        return $links;
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
