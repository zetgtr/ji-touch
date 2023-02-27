<?php

namespace App\Providers;

use App\QueryBuilder\MenuBuilder;
use App\QueryBuilder\QueryBuilder;
use App\QueryBuilder\RolesBuilder;
use App\QueryBuilder\UsersBuilder;
use App\Services\Contacts\Social;
use App\Services\SocialService;
use Illuminate\Support\ServiceProvider;

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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
