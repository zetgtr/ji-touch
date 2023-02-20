<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;


class SaveConfig extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'voyager:save {--t|translate : Add translations table to dump}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';


    protected $process;
    private $tables;


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->tables = [
            'data_rows',
            'data_types',
            'menu_items',
            'menus',
            'permission_role',
            'permissions',
            'roles',
            'settings',
            'user_roles',
        ];
    }



    public function handle()
    {
        $this->prepare();
        try {
            $this->process->mustRun();
            $this->info('The config has been saved successfully.');
        } catch (ProcessFailedException $exception) {
            $this->error($exception->getMessage());
            $this->error('The config save has been failed.');
        }
    }

    private function prepare(): void
    {
        if ($this->option('translate')){
            $this->tables[] = 'translations';
        }
        $tables = implode(' ',$this->tables);
        $this->process = new Process(
            (array)sprintf(
                'mysqldump -h%s -u%s -p%s %s %s > %s',
                config('database.connections.mysql.host'),
                config('database.connections.mysql.username'),
                config('database.connections.mysql.password'),
                config('database.connections.mysql.database'),
                $tables,
                database_path('dumps/settings.sql')
            ));
    }
}
