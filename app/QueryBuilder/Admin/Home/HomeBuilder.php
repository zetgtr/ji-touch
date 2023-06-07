<?php

namespace App\QueryBuilder\Admin\Home;

use App\Enums\MetrikaEnums;
use App\QueryBuilder\QueryBuilder;
use AXP\YaMetrika\Client;
use AXP\YaMetrika\YaMetrika;
use Illuminate\Database\Eloquent\Collection;

class HomeBuilder extends QueryBuilder
{
    private $metrika;
    public function __construct()
    {
        $token = 'y0_AgAAAAANClWCAAoE-gAAAADk6m_e6pY626ToTPGmD_JytPPKL7swDFw';
        $counterId = '90983527';
        $client = new Client($token, $counterId);
        $this->metrika = new YaMetrika($client);
    }

    public function getMetrikaTable(){
        $visitors = $this->metrika->getVisitors()->formatData();
        $data = [];
        foreach ($visitors['data'] as $visitor)
        {
            $data[] = array_merge(['date' => date("d.m.Y", strtotime($visitor['dimensions']['date']['name']))], $visitor['metrics']);
        }

        return $data;
    }
    public function getMetrikaDevices(){
        $params = [
            'date1' => '2023-06-07',
            'metrics' => 'ym:s:users',
            'dimensions' => 'ym:s:deviceCategory',

        ];
        $visitors = $this->metrika->customQuery($params)->formatData();
//        dd($visitors);
        $data = [];
        foreach ($visitors['data'] as $visitor)
        {
//            $data[] = array_merge(['date' => date("d.m.Y", strtotime($visitor['dimensions']['date']['name']))], $visitor['metrics']);
        }
//        dd($visitors);
        return $data;
    }

    public function getNavigatinMetrika()
    {
        $links = [MetrikaEnums::VISITS->value => ['url'=> MetrikaEnums::VISITS->value, 'name' => 'Количество посещений'],
            MetrikaEnums::PAGEVIEWS->value => ['url'=> MetrikaEnums::PAGEVIEWS->value,  'name' => 'Просмотры'],
            MetrikaEnums::USERS->value => ['url'=> MetrikaEnums::USERS->value,  'name' => 'Пользователи']
        ];

        $links[MetrikaEnums::VISITS->value]['active'] = true;

        return $links;
    }

    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }
}
