<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesHasNews extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('categories_has_news')->insert($this->getData());
    }
    public function getData(): array
    {
        return json_decode(file_get_contents(__DIR__.'/../damps/categories_has_news.json'), true);
    }
}
