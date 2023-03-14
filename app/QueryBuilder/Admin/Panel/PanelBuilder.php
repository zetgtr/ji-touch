<?php

namespace App\QueryBuilder\Admin\Panel;

use App\Enums\PanelNavigationEnums;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class PanelBuilder extends QueryBuilder
{

    public function getLinks($key = false)
    {
        $links = [
            PanelNavigationEnums::SITE->value => ['url'=> PanelNavigationEnums::SITE->value, 'name' => 'На сайте'],
            PanelNavigationEnums::SERVICE->value => ['url'=> PanelNavigationEnums::SERVICE->value,  'name' => 'Сервисные']
        ];

        if($key) $links[$key]['active'] = true;

        return $links;
    }
    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }
}
