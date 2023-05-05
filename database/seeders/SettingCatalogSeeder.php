<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingCatalogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('catalog_settings')->insert($this->getData());
    }

    public function getData(): array
    {
        return [
            ['id'=>1,"title"=>"Каталог","url"=>"catalog"],
        ];
    }
}
