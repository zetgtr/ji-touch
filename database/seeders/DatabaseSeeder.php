<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesSeeder::class,
            UsersSeeder::class,
            MenuSeeder::class,
            NewsSettings::class,
            SettingSeeder::class,
            HeaderAndFooterSeeder::class
        ]);
    }
}
