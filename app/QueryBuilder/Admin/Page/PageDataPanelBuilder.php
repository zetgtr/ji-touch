<?php

namespace App\QueryBuilder\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class PageDataPanelBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = DataPanel::query();
    }


    public function getPagePanels(int $id){
        $data = $this->model->where('id_page',$id)->get();
        foreach ($data as $key=>$datum){
            $data[$key]['content'] = json_decode($datum['content']);
        }
        return $data;
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
