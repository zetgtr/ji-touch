<?php

namespace App\Http\Controllers\Vue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RouterController extends Controller
{
    public function index(){
        return \inertia('Home',[
            'title'=>'Home'
        ]);
    }
    public function project(){
        return \inertia('Project',[
            'title'=>'Project'
        ]);
    }
}
