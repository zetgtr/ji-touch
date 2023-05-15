<?php

namespace App\Http\Controllers\Vue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RouterController extends Controller
{
    public function index(){
        return \inertia('Home',[
            'title'=>'Главная'
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
}
