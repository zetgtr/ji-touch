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
            ['id'=>8,'name'=>'Пользователи','position'=>'right','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null],
            ['id'=>9,'name'=>'Роли','position'=>'right','logo'=>'fad fa-user-tag','controller'=>'Admin\RolesController','url'=>'roles','parent'=>8],
            ['id'=>10,'name'=>'Пользователи','position'=>'right','logo'=>'fad fa-user','controller'=>'Admin\UserController','url'=>'user','parent'=>8],
            ['id'=>11,'name'=>'Редактор панелей','position'=>'left','logo'=>'fal fa-solar-panel','controller'=>'Admin\Panel\PanelController','url'=>'panel','parent'=>1],
            ['id'=>12,'name'=>'Шапка и подвал','position'=>'left','logo'=>'fal fa-analytics','controller'=>'Admin\HeaderAndFooter\HeaderAndFooterController','url'=>'header-and-footer','parent'=>5],
            ['id'=>13,'name'=>'Robot.txt','position'=>'right','logo'=>'fad fa-robot','controller'=>'Admin\Robot\RobotController','url'=>'robot','parent'=>3],
            ['id'=>14,'name'=>'Пакеты','position'=>'right','logo'=>'fad fa-box-open','controller'=>'Admin\Packages\PackagesController','url'=>'packages','parent'=>3],
            ['id'=>15,'name'=>'Обратная связь','position'=>'left','logo'=>'fal fa-comments','controller'=>'Admin\FeedBack\FeedBackController','url'=>'feedback','parent'=>5],
        ];
    }
}
