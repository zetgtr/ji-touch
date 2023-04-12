<?php

use App\Http\Controllers\Admin\Page\PageController;
use App\Http\Controllers\Admin\Panel\PanelController;
use App\Http\Controllers\Form\FormController;
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

Route::get('panel_data/{name}', [PanelController::class, 'show']);

Route::post('form/{name}', FormController::class);
