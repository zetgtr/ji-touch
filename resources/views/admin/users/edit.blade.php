@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Редактировать пользователя</h1>
    </div>
    <div>
        @if ($errors->any())
            @foreach($errors->all() as $error)
                <x-alert type="danger" :message="$error"></x-alert>
            @endforeach
        @endif
        <form method="post" action="{{ route('admin.user.update', ['user' => $user]) }}">
            @csrf
            @method('put')
            <div class="mb-3">
                <label for="name">Пользователь</label>
                <input type="text" id="name" name="name" value="{{ $user->name }}" class="form-control">
            </div>
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" value="{{ $user->email }}" name="email">
            </div>
            <div class="d-flex">
                <input type="checkbox" id="is_admin" name="is_admin" value="1" @if($user->is_admin) checked @endif class="form-check">
                <label class="mx-2" for="is_admin">Админ</label>
            </div>
            <br>
            <button type="submit" class="btn btn-success">Сохранить</button>
        </form>
    </div>
@endsection
