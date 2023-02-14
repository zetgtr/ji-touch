<?php

use App\Http\Controllers\Home\IndexController;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Events\RoutingAdmin;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [IndexController::class, 'index'])->name('home');

Route::group(['prefix' => 'admin'], function () {
    event(new RoutingAdmin());
    Route::get("/logout", [LoginController::class, 'logout'])->name('account.logout');
});

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
