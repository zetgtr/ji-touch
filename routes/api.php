<?php

use App\Http\Controllers\Admin\Navigation\NavigationController;
use App\Http\Controllers\Admin\Navigation\NavigationListController;
use App\Http\Controllers\Admin\Page\PageController;
use App\Http\Controllers\Admin\Panel\PanelController;
use App\Http\Controllers\Form\FormController;
use App\Models\Admin\Navigation\NavigationList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'admin', 'as' => 'admin.'], static function() {
    Route::get('get_page/{page}',[PageController::class,'show']);
});

Route::post('navigation/set/{id}', [NavigationListController::class,'setLink']);

Route::get('navigation/get/{alias}', [NavigationListController::class,'getAlias']);

Route::get('panel_data/{name}', [PanelController::class, 'show']);
Route::get('page_route', [PageController::class, 'getPageRouter']);

Route::post('form/{name}', FormController::class);
