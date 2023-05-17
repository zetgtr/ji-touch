<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Route;

class SitemapController extends Controller
{
    public function index(){
        // Получение списка всех роутов
        $routes = collect(Route::getRoutes())->map(function ($route) {
            return $route->uri();
        });

// Генерация sitemap.xml файла
        Sitemap::create()
            ->hasCrawled(function (Url $url) use ($routes) {
                $url->setPriority(0.8); // Установить приоритет для всех роутов
                $url->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY); // Установить частоту обновления

                // Проверить, есть ли роут в списке
                if ($routes->contains($url->path())) {
                    $url->setPriority(1.0); // Установить приоритет для определенных роутов
                }

                return $url;
            })
            ->writeToFile(public_path('sitemap.xml'));
    }
}
