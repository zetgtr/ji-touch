<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Settings\UpdateRequest;
use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\Admin\Settings\SettingsBuilder;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(SettingsBuilder $settingsBuilder)
    {
        return view('admin.settings.index',['settings'=>$settingsBuilder->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, int $id)
    {
        $updated = Settings::query()->find($id);
        $updated = $updated->fill($request->validated());
        if ($updated->save()) {
            return \redirect()->route('admin.settings.index')->with('success', __('messages.admin.settings.update.success'));
        }

        return \back()->with('error', __('messages.admin.settings.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
