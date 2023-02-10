<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Forms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forms\UnloadingRequest;
use App\Models\Forms\Unloading;
use App\QueryBuilder\Forms\UnloadingBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use PHPUnit\Exception;

class UnloadingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param UnloadingBuilder $unloadingBuilder
     * @return View
     */
    public function index(UnloadingBuilder $unloadingBuilder): View
    {
        return view('admin.forms.unloading.index',['unloadingList' => $unloadingBuilder->getUnloadingPagination()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UnloadingRequest $request
     * @return RedirectResponse
     */
    public function store(UnloadingRequest $request): RedirectResponse
    {
        $unloading = Unloading::create($request->validated());
        if ($unloading) {
            return \redirect()->route('info')->with('success', __('messages.admin.unloading.store.success'));
        }

        return \back()->with('error', __('messages.admin.unloading.store.fail'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Unloading $unloading
     * @return array
     */
    public function destroy(Unloading $unloading): array
    {
        try {
            $unloading->delete();
            $request = ['status' => true,'message' => __('messages.admin.unloading.destroy.success')];
        }catch (Exception $exception)
        {
            $request = ['status' => false, 'message' => __('messages.admin.unloading.destroy.success'). $exception->getMessage()];
        }
        return $request;
    }
}
