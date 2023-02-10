<?php

declare(strict_types=1);

use App\Http\Controllers\Account\IndexController as AccountController;
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\Forms\FeedbackController as AdminFeedbackController;
use App\Http\Controllers\Admin\Forms\UnloadingController as AdminUnloadingController;
use App\Http\Controllers\Admin\FormsController;
use App\Http\Controllers\Admin\IndexController as AdminController;
use \App\Http\Controllers\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\IndexController as HomeController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::group(['middleware' => "auth"], static function(){

    Route::get("/logout", [LoginController::class, 'logout'])->name('account.logout');

    Route::get("/account", AccountController::class)->name("account");

    Route::group(['prefix'=>"admin", 'as'=>'admin.', 'middleware' => 'is_admin'],static function(){

        Route::get("/", AdminController::class)
            ->name('index');

        Route::get("/form", FormsController::class)
            ->name('form.index');

        Route::group(['prefix'=> "form", 'as' =>'form.'],static function(){

            Route::resource('feedback', AdminFeedbackController::class);

            Route::resource('unloading', AdminUnloadingController::class);

        });

        Route::resource('category', AdminCategoryController::class);

        Route::resource('home', AdminNewsController::class);

        Route::resource('user', AdminUserController::class);

    });
});


Route::group(['prefix'=>""],static function(){
    Route::get('/', [HomeController::class, "index"])
        ->name('index');

    Route::get('/info', [InfoController::class,"index" ])
        ->name('info');

    Route::get('/home/{id}', [NewsController::class, "index"])
        ->name('home');

    Route::get('/home/show/{id}', [NewsController::class, "show"])
        ->where('id','\d+')
        ->name('home.show');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
