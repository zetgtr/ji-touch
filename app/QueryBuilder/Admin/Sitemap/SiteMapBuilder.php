<?php

namespace App\QueryBuilder\Admin\Sitemap;

use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class SiteMapBuilder extends QueryBuilder
{

    public function getAll(): Collection
    {

    }

    public function getMap(){
        SitemapGenerator::create(env('APP_URL'))
            ->writeToFile(public_path("sitemap.xml"));
    }
}
