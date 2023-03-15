<?php

namespace App\QueryBuilder\Admin\Panel;

use App\Enums\PanelNavigationEnums;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class PanelBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = Panel::query();
    }

    public function getLinks($key = false)
    {
        $links = [
            PanelNavigationEnums::SITE->value => ['url'=> PanelNavigationEnums::SITE->value, 'name' => 'На сайте'],
            PanelNavigationEnums::SERVICE->value => ['url'=> PanelNavigationEnums::SERVICE->value,  'name' => 'Сервисные']
        ];

        if($key) $links[$key]['active'] = true;

        return $links;
    }
    public function getSitePanels(): Collection
    {
        return $this->model->where('service',0)->get();
    }
    public function getServicePanels(): Collection
    {
        return $this->model->where('service',1)->get();
    }
    public function getPanelAll(): Collection
    {
        $panels = $this->model->get();
        foreach ($panels as $key=>$panel)
        {
            $panel->data = json_decode($panel->data);
            $panels[$key] = $panel;
        }

        return $panels;
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
