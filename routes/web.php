<?php

use App\Http\Controllers\Admin\Catalog\CatalogCategoryController;
use App\Http\Controllers\Admin\Catalog\CatalogProductController;
use App\Http\Controllers\Admin\Catalog\CatalogSettingsController;
use App\Http\Controllers\Admin\IndexController as AdminController;
use App\Http\Controllers\Admin\Navigation\NavigationController;
use App\Http\Controllers\Admin\News\CategoryController as NewsCategoryController;
use App\Http\Controllers\Admin\News\NewsController as AdminNewsController;
use App\Http\Controllers\Admin\News\SettingsController as NewsSettingsController;
use App\Http\Controllers\Admin\Packages\PackagesController;
use App\Http\Controllers\Admin\Packages\PackagesSettings;
use App\Http\Controllers\Admin\Page\PageController;
use App\Http\Controllers\Admin\Panel\PanelController;
use App\Http\Controllers\Admin\RolesController as AdminRolesController;
use App\Http\Controllers\Admin\SettingsMenuController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Vue\RouterController;
use App\Models\Admin\HeaderAndFooter\HeaderAndFooter;
use App\Models\Admin\Menu;
use App\Models\Admin\Navigation\NavigationList;
use App\Utils\Lfm;
use http\Client\Response;
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

        Route::post('panel/get_all', [PanelController::class,'getAllPanel'])->name('panel-all-get');

        Route::post('panel/select', [PanelController::class,'getSelectTable'])->name('panel-select');

        Route::group(['prefix' => 'catalog', 'as' => 'catalog.'], static function() {
            Route::resource('product', CatalogProductController::class);
            Route::resource('category', CatalogCategoryController::class);
            Route::resource('settings', CatalogSettingsController::class);
            Route::post('category/order', [CatalogCategoryController::class,'order'])->name('category.order');
            Route::post('product/order', [CatalogProductController::class,'order'])->name('product.order');
            Route::get('category/publish/{category}', [CatalogCategoryController::class,'publish'])->name('category.publish');
            Route::get('product/publish/{product}', [CatalogProductController::class,'publish'])->name('product.publish');
        });

//        Route::resource('user', AdminUserController::class);
//        Route::resource('roles', AdminRolesController::class);
//        Route::resource('news', AdminNewsController::class);

//        Route::resource('news', AdminNewsController::class);
//
//        Route::group(['prefix' => 'news', 'as' => 'news.'], static function(){
//            Route::resource('category', NewsCategoryController::class);
//        });
//
        Route::resource('packages_settings', PackagesSettings::class);
        Route::resource('navigation', NavigationController::class);

        Route::group(['prefix' => 'packages', 'as' => 'packages.'], static function() {
            Route::put('packages/set', [PackagesController::class, 'store'])->name('set');
            Route::get('packages/set-data', [PackagesController::class, 'setData'])->name('set-data');
        });

        Route::group(['prefix' => 'panel', 'as' => 'panel.'], static function() {
            Route::get('publish/{panel}',[PanelController::class,'publish'])->name('publish');
        });

        Route::put('user/password',[AdminUserController::class, 'passwordUpdate'])->name('password-update');

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

Route::get('robots.txt', function() {
    $output = "User-agent: *\n";

    // Запретить индексацию определенных страниц.
    $output .= "Disallow: /admin\n";

    // Разрешить индексацию всех остальных страниц.
    $output .= "Allow: /\n";

    return Response::make($output, 200, ['Content-Type' => 'text/plain']);
});

//Route::get('/{vue_capture?}', function() {
//    return view('welcome', ['data'=> HeaderAndFooter::query()->find(1)]);
//})->where('vue_capture', '[\/\w\.-]*')
//    ->name('home');

Route::get('/',[RouterController::class,'index'])->name('home');
Route::get('/project',[RouterController::class,'project'])->name('project');
Route::get('/about',[RouterController::class,'about'])->name('about');
Route::get('/agency',[RouterController::class,'agency'])->name('agency');
Route::get('/contact',[RouterController::class,'contact'])->name('contact');
Route::get('/price',[RouterController::class,'price'])->name('price');
Route::get('/reviews',[RouterController::class,'reviews'])->name('reviews');
Route::get('/education',[RouterController::class,'education'])->name('education');
Route::get('/jobs',[RouterController::class,'jobs'])->name('jobs');
