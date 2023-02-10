<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        \DB::table('categories')->insert($this->getData());
    }

    public function getData(): array
    {
        return json_decode(file_get_contents(__DIR__.'/../damps/categories.json'), true);
    }
}
