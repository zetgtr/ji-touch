<?php

namespace App\QueryBuilder;

use App\Enums\NewsEnums;
use App\Models\Admin\News;
use Illuminate\Database\Eloquent\Collection;

class NewsBuilder extends QueryBuilder
{
    public function __construct()
    {
        $this->model = News::query();
    }

    public function getLinks($key)
    {
        $links = [NewsEnums::CONTENT->value => ['url'=> NewsEnums::CONTENT->value, 'name' => 'Контент'],
            NewsEnums::PHOTO->value => ['url'=> NewsEnums::PHOTO->value,  'name' => 'Фото'],
            NewsEnums::SEO->value => ['url'=> NewsEnums::SEO->value,  'name' => 'SEO']
        ];

        $links[$key]['active'] = true;

        return $links;
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
