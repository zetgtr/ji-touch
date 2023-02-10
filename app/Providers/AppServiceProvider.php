<?php

declare(strict_types=1);

namespace App\Providers;

use App\QueryBuilder\CategoriesBuilder;
use App\QueryBuilder\Forms\FeedbackBuilder;
use App\QueryBuilder\Forms\UnloadingBuilder;
use App\QueryBuilder\NewsBuilder;
use App\QueryBuilder\QueryBuilder;
use App\QueryBuilder\UsersBuilder;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind(QueryBuilder::class, CategoriesBuilder::class);
        $this->app->bind(QueryBuilder::class, NewsBuilder::class);
        $this->app->bind(QueryBuilder::class, FeedbackBuilder::class);
        $this->app->bind(QueryBuilder::class, UnloadingBuilder::class);
        $this->app->bind(QueryBuilder::class, UsersBuilder::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        Paginator::useBootstrapFour();
    }
}
