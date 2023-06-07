<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\QueryBuilder\Admin\Home\HomeBuilder;
use AXP\YaMetrika\Client;
use AXP\YaMetrika\YaMetrika;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request,HomeBuilder $homeBuilder) : View
    {
        $homeBuilder->getMetrikaDevices();
        return \view("admin.index",['metrika'=> json_encode($homeBuilder->getMetrikaTable()),'links' => $homeBuilder->getNavigatinMetrika()]);
    }
}
