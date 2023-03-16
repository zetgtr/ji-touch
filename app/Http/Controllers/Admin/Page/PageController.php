<?php

namespace App\Http\Controllers\Admin\Page;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Page\CreateRequest;
use App\Http\Requests\Admin\Page\DataPanelCreateRequest;
use App\Http\Requests\Admin\Page\UpdateRequest;
use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\QueryBuilder\Admin\Page\PageDataPanelBuilder;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PageBuilder $pageBuilder)
    {
        return view('admin.page-create.index',['pages'=>$pageBuilder->getPagesParent()]);
    }

    public function order(Request $request, PageBuilder $pageBuilder){
        $pageBuilder->setOrder($request->all()['items']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.page-create.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $request)
    {
        $page = PageCreate::create($request->validated());

        if ($page) {
            $datahub = json_decode($request->input('datahub'));

            foreach ($datahub->data as $key=>$data) {
                $dataPanel = new DataPanel();
                $dataPanel->id_panel = $data->id_panel;
                $dataPanel->display = $data->display;
                $dataPanel->type = $data->type;
                $dataPanel->content = $data->content;
                $dataPanel->id_boll = false;
                $dataPanel->safe = $data->safe;
                $dataPanel->id_page = $page->id;
                $dataPanel->order = $key;
                $dataPanel->save();
            }
            return \redirect()->route('admin.page-create.index')->with('success', __('messages.admin.page.create.success'));
        }

        return \redirect()->route('admin.page-create.create')->with('error', __('messages.admin.page.create.fail'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PageCreate $pageCreate)
    {
        return view('admin.page-create.edit',['page'=>$pageCreate]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, PageCreate $pageCreate)
    {
        $pageCreate = $pageCreate->fill($request->validated());
        if ($pageCreate->save()) {
            return \redirect()->route('admin.page-create.index')->with('success', __('messages.admin.settings.update.success'));
        }

        return \back()->with('error', __('messages.admin.settings.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PageCreate $pageCreate)
    {
        try {
            $pageCreate->delete();
            $response = ['status' => true,'message' => __('messages.admin.page.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.page.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
