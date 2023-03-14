<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\PasswordUpdateRequest;
use App\Http\Requests\Admin\User\UpdateProfileRequest;
use App\Models\User;
use App\QueryBuilder\UsersBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(UsersBuilder $usersBuilder): View
    {
        return view('admin.users.index', ['users'=>$usersBuilder->getAll()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user): View
    {
        return \view('admin.users.edit',['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfileRequest $updateProfileRequest, User $user): RedirectResponse
    {
        $user = $user->fill($updateProfileRequest->validated());
        if ($user->save()){
            return redirect()->route('admin.user.edit',['user'=>$user])->with('success','Пользователь успешно обновлен');
        }

        return redirect()->route('admin.user.edit',['user'=>$user])->with('error','Не удалось обновить пользователя');

    }

    public function passwordUpdate(PasswordUpdateRequest $passwordUpdateRequest){
        $passwordUpdateRequest->handle();
        return redirect()->back()->with('status', 'Пароль успешно обновлен!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }
}
