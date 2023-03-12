<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->insert($this->getData());
    }

    public function getData()
    {
        return [
            'name' => 'admin',
            'email'=> 'admin@admin.ru',
            'role_id'=> 1,
            'is_admin' => true,
            'password' => '$2y$10$/hVI6y24X8xE5b3nxyRqqe79wwwrLGOKrYlkhDsxAA4saIysP24vm'
        ];
    }
}
