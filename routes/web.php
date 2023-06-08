<?php


use App\Http\Controllers\Admin\Home\IndexController as AdminController;
use App\Http\Controllers\Admin\Navigation\NavigationController;
use App\Http\Controllers\Admin\Packages\PackagesController;
use App\Http\Controllers\Admin\Packages\PackagesSettings;
use App\Http\Controllers\Admin\Page\PageController;
use App\Http\Controllers\Admin\Panel\PanelController;
use App\Http\Controllers\Admin\SettingsMenuController;
use App\Http\Controllers\Admin\SitemapController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\Vue\RouterController;
use App\Models\Admin\Menu;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\Utils\Lfm;
use Illuminate\Support\Facades\Artisan;
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
        Route::get("/", [AdminController::class,'index'])
            ->name('index');
//        Route::get('user', )
        Route::group(['prefix' => 'settings', 'as' => 'settings.'], static function(){
//            Route::resource('menu', SettingsMenuController::class);
            Route::post('menu/order', [SettingsMenuController::class,'menuOrder'])->name('menu.order');
        });
        Route::post('page/order', [PageController::class,'order'])->name('page.order');

        Route::post('panel/get_all', [PanelController::class,'getAllPanel'])->name('panel-all-get');

        Route::post('panel/select', [PanelController::class,'getSelectTable'])->name('panel-select');

        Route::get('/sitemap',[SitemapController::class,'index'])->name('sitemap');
        Route::resource('packages_settings', PackagesSettings::class);
        Route::resource('navigation', NavigationController::class);

        Route::group(['prefix' => 'packages', 'as' => 'packages.'], static function() {
            Route::put('packages/set', [PackagesController::class, 'store'])->name('set');
            Route::put('packages/set-data', [PackagesController::class, 'setData'])->name('set-data');
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

Route::get('/process-queue', function () {
    Artisan::call('queue:work');
});

Route::get('/',[RouterController::class,'index'])->name('home');
Route::get('/project',[RouterController::class,'project'])->name('project');
Route::get('/about',[RouterController::class,'about'])->name('about');
Route::get('/agency',[RouterController::class,'agency'])->name('agency');
// Route::get('/contacts',[RouterController::class,'contacts'])->name('contacts');
// Route::get('/reviews',[RouterController::class,'reviews'])->name('reviews');
Route::get('/education',[RouterController::class,'education'])->name('education');
// Route::get('/jobs',[RouterController::class,'jobs'])->name('jobs');
Route::get('/services',[RouterController::class,'services'])->name('services');

try {
    $pageBuilder = new PageBuilder();

    function setRoute($pages,$url = "") {

        foreach ($pages as $page) {
            $secondUrl = $url ."/". $page->url;
            Route::get($secondUrl, function () use ($page) {
                $routerController = new RouterController();
                return $routerController->pages($page);
            })->name($page->url);

            if (is_object($page->parent)) {
                setRoute($page->parent,$secondUrl);
            }
        }
    }

    setRoute($pageBuilder->getPagesParent());

} catch (Exception $exception)
{

}
