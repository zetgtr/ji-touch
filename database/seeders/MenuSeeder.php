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
            ['id'=>1,'name'=>'Инструменты','position'=>'left','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null],
            ['id'=>2,'name'=>'Файлы','position'=>'left','logo'=>'fe fe-folder','controller'=>'Admin\FileController','url'=>'file','parent'=>1],
            ['id'=>3,'name'=>'Настройки','position'=>'right','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null],
            ['id'=>4,'name'=>'Настройки меню','position'=>'right','logo'=>'fe fe-settings','controller'=>'Admin\SettingsMenuController','url'=>'menu','parent'=>3],
            ['id'=>5,'name'=>'Сайт','position'=>'left','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null],
            ['id'=>6,'name'=>'Создание страниц','position'=>'left','logo'=>'far fa-tools','controller'=>'Admin\Page\PageController','url'=>'page-create','parent'=>5],
            ['id'=>7,'name'=>'Главные настройки','position'=>'right','logo'=>'fad fa-cogs','controller'=>'Admin\Settings\SettingsController','url'=>'settings','parent'=>3],
            ['id'=>8,'name'=>'Новости','position'=>'left','logo'=>'fa fa-align-justify','controller'=>'Admin\NewsController','url'=>'news','parent'=>5],
        ];
    }
}
