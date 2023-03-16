<?php

namespace App\QueryBuilder\Admin\Panel;

use App\Enums\PanelNavigationEnums;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PanelBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = Panel::query();
    }

    public function getLinks($key = false)
    {
        $links = [
            PanelNavigationEnums::SITE->value => ['url'=> PanelNavigationEnums::SITE->value, 'name' => 'На сайте'],
            PanelNavigationEnums::SERVICE->value => ['url'=> PanelNavigationEnums::SERVICE->value,  'name' => 'Сервисные']
        ];

        if($key) $links[$key]['active'] = true;

        return $links;
    }
    public function getSitePanels(): Collection
    {
        return $this->model->where('service',0)->get();
    }
    public function getServicePanels(): Collection
    {
        return $this->model->where('service',1)->get();
    }
    public function getPanelAll(): Collection
    {
        $panels = $this->model->get();
        foreach ($panels as $key=>$panel)
        {
            $panel->data = json_decode($panel->data);
            $panels[$key] = $panel;
        }

        return $panels;
    }

    private function selectRow($type, $col, $order, $limit, $where, $table, $query)
    {
        $array = [];
        if($type != 'query')
        {
            $query = '';
            foreach ($col as $key => $val) {
                if ($val != 'none') {
                    $query .= "`$val` as '$key', ";
                }
            }
            $query = substr($query, 0, -2);
            if ($query != false) {
                $order = $order != '' ? 'ORDER BY ' . $order . ' ' : '';
                $limit = $limit != '' ? 'LIMIT ' . $limit . ' ' : '';
                $where = $where != '' ? 'WHERE ' . $where . ' ' : 'WHERE 1 ';
                $data = DB::select("SELECT $query FROM `" . $table . "` $where $order $limit");
                foreach ($data as $key => $val) {
                    if (is_string($val)) {
                        $data[$key] = htmlspecialchars($val, ENT_QUOTES);
                        $data[$key] = str_replace(array("\r", "\n"), "", $data[$key]);
                    }
                }
                $array[] = $data;
            }
        } else {
            $data = DB::select($query);
            $ar = [];
            foreach ($col as $key => $val) {
                $ar[$key] = isset($data[$val]) ? $data[$val] : '';
                if (is_string($ar[$key])) {
                    $ar[$key] = htmlspecialchars($ar[$key], ENT_QUOTES);
                    $ar[$key] = str_replace(array("\r", "\n"), "", $ar[$key]);
                }
            }
            $array[] = $ar;
        }
        foreach ($array as $key => $val) {
            foreach ($col as $key2 => $val2) {
                if (!isset($val[$key2])) {
                    $array[$key][$key2] = '';
                }
            }
            ksort($array[$key]);
        }
        return $array;
    }

    private function selectTable()
    {
        $array = array();
        $row = DB::select("SHOW TABLES FROM `".env("DB_DATABASE").'`');
        foreach ($row as $data)
        {
            $data = (array) $data;
            $array [] =  [$data['Tables_in_'.env("DB_DATABASE")],"2"];
        }
        return json_encode($array);
    }

    private function selectCol($type, $table, $query)
    {
        try {
            $array = ['col' => []];
            if($type == 'default'){
                $columns = DB::select("SHOW COLUMNS FROM `".$table."`");
                $data = [];
                foreach ($columns as $column)
                    $data[] = $column->Field;
                $array = ['col' => $data];
            }else{
                preg_match('/^.*FROM\s*[`]*\s*([^\s`]*).*$/',$query,$matc);
                $rez = DB::select($query);
                if(isset($rez)){
                    $array = ['col'=> array_keys((array) $rez[0]),'from'=>'2'];
                }
            }
        } catch (\Exception $exception){
            $array = ['from'=>'1'];
        }

        return json_encode($array);
    }

    public function getSelectTable(Request $request){
        return match ($request->input('operation')){
            "selectTable" => $this->selectTable(),
            "selectCol" => $this->selectCol(
                $request->input('type'),
                $request->input('table'),
                $request->input('query')
            ),
            "selectRow" => $this->selectRow(
                $request->input('type'),
                $request->input('col'),
                $request->input('ORDER'),
                $request->input('LIMIT'),
                $request->input('WHERE'),
                $request->input('table'),
                $request->input('query')
            )
        };
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }


}
