<?php

namespace App\QueryBuilder\Admin\Sitemap;

use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SiteMapBuilder extends QueryBuilder
{

    public function getAll(): Collection
    {

    }

    public function getMap(){
        Sitemap::create()
            ->add(Url::create(env('APP_URL'))
            ->setLastModificationDate(Carbon::yesterday())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
            ->setPriority(0.1))
            ->writeToFile(public_path("sitemap.xml"));
    }
}
