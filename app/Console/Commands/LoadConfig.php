<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Exception\InvalidOptionException;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class LoadConfig extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'voyager:load';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $dump_path;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->dump_path = database_path('dumps/settings.sql');
        $this->process = new Process(
            (array)sprintf(
                'mysql -h%s -u%s -p%s %s < %s',
                config('database.connections.mysql.host'),
                config('database.connections.mysql.username'),
                config('database.connections.mysql.password'),
                config('database.connections.mysql.database'),
                $this->dump_path
            ));
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            if (file_exists($this->dump_path)){
                $this->process->mustRun();
                $this->info('The config has been load successfully.');
            }else{
                $this->error('Dump file doesnot exist');
            }
        } catch (ProcessFailedException $exception) {
            $this->error($exception->getMessage());
            $this->error('The config load has been failed.');
        }
    }
}
