<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('menus')->insert($this->getData());
    }

    public function getData()
    {
        return [
            ['name'=>'Инструменты','position'=>'left'],
            ['name'=>'Файлы','position'=>'left','controller'=>'Admin\FileController','url'=>'file','parent'=>2]
        ];
    }
}
