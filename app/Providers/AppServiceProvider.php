<?php

namespace App\Providers;

use App\QueryBuilder\Admin\News\CategoryBuilder as NewsCategoryBuilder;
use App\QueryBuilder\MenuBuilder;
use App\QueryBuilder\NewsBuilder;
use App\QueryBuilder\QueryBuilder;
use App\QueryBuilder\RolesBuilder;
use App\QueryBuilder\UsersBuilder;
use App\Services\Contacts\Social;
use App\Services\SocialService;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(Social::class, SocialService::class);
        $this->app->bind(QueryBuilder::class, UsersBuilder::class);
        $this->app->bind(QueryBuilder::class, RolesBuilder::class);
        $this->app->bind(QueryBuilder::class, MenuBuilder::class);
        $this->app->bind(QueryBuilder::class, NewsBuilder::class);
        $this->app->bind(QueryBuilder::class, NewsCategoryBuilder::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
    }
}
