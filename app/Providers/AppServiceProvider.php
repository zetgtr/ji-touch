<?php

namespace App\Providers;

use App\QueryBuilder\BurgerBuilder;
use App\QueryBuilder\HeaderBuilder;
use App\QueryBuilder\PagesBuilder;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(QueryBuilder::class, HeaderBuilder::class);
        $this->app->bind(QueryBuilder::class, PagesBuilder::class);
        $this->app->bind(QueryBuilder::class, BurgerBuilder::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
