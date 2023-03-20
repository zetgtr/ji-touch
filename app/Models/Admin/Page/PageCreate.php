<?php

namespace App\Models\Admin\Page;

use App\Models\Admin\Panel\DataPanel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageCreate extends Model
{
    use HasFactory;

    protected $table = 'page_create';

    protected $fillable = [
        'title','url','custom_title','description','keywords','access'
    ];

    public function setPanelData($request,$page){
        $datahub = json_decode($request->input('datahub'));
        DataPanel::query()->where('id_page',$page->id)->delete();
        if (!empty($datahub->data)) {
            foreach ($datahub->data as $key => $data) {
                $dataPanel = new DataPanel();
                if (!empty($data->id_panel)) $dataPanel->id_panel = $data->id_panel;
                $dataPanel->display = $data->display;
                $dataPanel->type = $data->type;
                $dataPanel->content = $data->content;
                $dataPanel->id_boll = false;
                if (!empty($data->safe)) $dataPanel->safe = $data->safe;
                $dataPanel->id_page = $page->id;
                $dataPanel->order = $key;
                $dataPanel->save();
            }
        }
    }
}
