<?php

namespace App\Http\Controllers\Vue;

use App\Http\Controllers\Controller;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\QueryBuilder\Admin\Page\PageDataPanelBuilder;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Ramsey\Collection\Collection;

class RouterController extends Controller
{
    public function index(PanelBuilder $panelBuilder){
        return \inertia('Home',[
            'title'=>'Главная',
            'first' => $panelBuilder->getAlias("first"),
            'services' => $panelBuilder->getAlias("services"),
            'portfolio' => $panelBuilder->getAlias("portfolio"),
            'company' => $panelBuilder->getAlias("company"),
            'order' => $panelBuilder->getAlias("order"),
            'contact' => $panelBuilder->getAlias("contact"),
        ]);
    }
    public function project(){
        return \inertia('Project',[
            'title'=>'Наши работы'
        ]);
    }
    public function about(){
        return \inertia('About',[
            'title'=>'О компании'
        ]);
    }
    public function agency(){
        return \inertia('Agency',[
            'title'=>'Агенство'
        ]);
    }
    public function contact(){
        return \inertia('Contact',[
            'title'=>'Контакты'
        ]);
    }
    public function price(){
        return \inertia('Price',[
            'title'=>'Услуги'
        ]);
    }
    public function reviews(){
        return \inertia('Reviews',[
            'title'=>'Наши отзывы'
        ]);
    }
    public function education(){
        return \inertia('Education',[
            'title'=>'О компании'
        ]);
    }
    public function jobs(){
        return \inertia('Jobs',[
            'title'=>'Вакансии'
        ]);
    }

    public function pages($pages){
        $pageBuilder = new PageDataPanelBuilder();
        return \inertia('Pages',[
            'title'=> $pages->custom_title,
            'panels' => $pageBuilder->getDataPanel($pages->id)
        ]);
    }
}
