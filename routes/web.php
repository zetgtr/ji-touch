<?php

use App\Http\Controllers\Admin\IndexController as AdminController;
use App\Http\Controllers\Admin\News\CategoryController as NewsCategoryController;
use App\Http\Controllers\Admin\News\NewsController as AdminNewsController;
use App\Http\Controllers\Admin\News\SettingsController as NewsSettingsController;
use App\Http\Controllers\Admin\Page\PageController;
use App\Http\Controllers\Admin\RolesController as AdminRolesController;
use App\Http\Controllers\Admin\SettingsMenuController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\ProfileController;
use App\Models\Admin\Menu;
use App\Utils\Lfm;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::middleware('auth')->group(function () {
    Route::group(['prefix'=>"admin", 'as'=>'admin.', 'middleware' => 'is_admin'],static function(){
        Route::get("/", AdminController::class)
            ->name('index');
//        Route::get('user', )
        Route::group(['prefix' => 'settings', 'as' => 'settings.'], static function(){
//            Route::resource('menu', SettingsMenuController::class);
            Route::post('menu/order', [SettingsMenuController::class,'menuOrder'])->name('menu.order');
        });
        Route::post('page/order', [PageController::class,'order'])->name('page.order');

        Route::resource('user', AdminUserController::class);
        Route::resource('roles', AdminRolesController::class);
        Route::resource('news', AdminNewsController::class);
        Route::resource('news', AdminNewsController::class);

        Route::group(['prefix' => 'news', 'as' => 'news.'], static function(){
            Route::resource('category', NewsCategoryController::class);
        });

        Route::group(['prefix' => 'news', 'as' => 'news.'], static function(){
            Route::resource('settings', NewsSettingsController::class);
        });

        try {
            foreach (Menu::query()->get() as $menu)
            {
                if($menu->controller)
                {

                    $controllerClass = '\App\Http\Controllers\\' . $menu->controller;

                    if (class_exists($controllerClass)) {
                        if ($menu->controller_type) {
                            Route::get($menu->url, $controllerClass)
                                ->name(str_replace("/",".",$menu->url))
                                ->middleware('menu.check:'.$menu->id);
                        } else {
                            Route::resource($menu->url, $controllerClass)
                                ->middleware('menu.check:'.$menu->id);
                        }
                    }
                }
            }
        } catch (Exception $exception)
        {

        }
    });
});

Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    Lfm::routes();
});


Route::group(['middleware' => 'guest'], function (){
    Route::get('/auth/redirect/{driver}', [SocialController::class, 'redirect'])
        ->where('driver','\w+')
        ->name('social.auth.redirect');
    Route::get('/auth/callback/{driver}', [SocialController::class, 'callback'])
        ->where('driver','\w+');
});

Route::get('/{vue_capture?}', function() {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*')
    ->name('home');
