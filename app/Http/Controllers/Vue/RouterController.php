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
}
