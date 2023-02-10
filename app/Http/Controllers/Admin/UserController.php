<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\EditRequest;
use App\Models\User;
use App\QueryBuilder\UsersBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use PHPUnit\Exception;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(UsersBuilder $usersBuilder): View
    {
        return \view('admin.users.index', ['users' => $usersBuilder->getUsersWithPagination()]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return View
     */
    public function edit(User $user): View
    {
        return \view('admin.users.edit',['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EditRequest $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(EditRequest $request,User $user): RedirectResponse
    {
        $user = $user->fill($request->validated());
        if ($user->save()) {
            return \redirect()->route('admin.user.index')->with('success', __('messages.admin.news.update.success'));
        }

        return \back()->with('error', __('messages.admin.user.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return array
     */
    public function destroy(User $user): array
    {
        try {
            $user->delete();
            $response = ['status' => true,'message' => __('messages.admin.news.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.news.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
