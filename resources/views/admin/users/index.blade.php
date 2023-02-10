@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Пользователи</h1>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Имя</th>
                <th>email</th>
                <th>Админ</th>
                <th>Дата регистрации</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse($users as $user)
                <tr>
                    <td>{{ $user->id }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->is_admin ? "да" : "нет" }}</td>
                    <td>{{ $user->created_at }}</td>
                    <td><a href="{{ route('admin.user.edit', ['user' => $user]) }}">Изм.</a> &nbsp; <a href="{{ route('admin.user.destroy', ['user' => $user]) }}" class="delete" style="color: red;"> Уд.</a> </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Записей нет</td>
                </tr>
            @endforelse
            </tbody>
        </table>
        <div class="w-100 d-flex justify-content-center"
        {{ $users->links() }}
    </div>
    </div>
    <script src="{{ asset('assets/js/admin/script.js') }}"></script>
@endsection
