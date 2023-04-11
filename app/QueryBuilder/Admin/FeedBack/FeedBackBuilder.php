<?php

namespace App\QueryBuilder\Admin\FeedBack;

use App\Models\Admin\FeedBack;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class FeedBackBuilder extends QueryBuilder
{
    public Builder $model;
    public function __construct()
    {
        $this->model = FeedBack::query();
    }

    public function getAll(): Collection
    {
       return $this->model->get();
    }

    public function setForm(array $form)
    {
        FeedBack::create(['name'=>$form['name'],'phone'=>$form['tel'],'email'=>$form['email'],'pages'=>$form['pages']]);
    }
}
