@extends('layouts.admin')
@section('content')
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Формы выгрузки данных</h1>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Пользователь</th>
                <th>Телефон</th>
                <th>email</th>
                <th>Комментарий</th>
                <th>Дата добавления</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse($unloadingList as $unloading)
                <tr>
                    <td>{{ $unloading->id }}</td>
                    <td>{{ $unloading->user }}</td>
                    <td>{{ $unloading->phone }}</td>
                    <td>{{ $unloading->email }}</td>
                    <td>{{ $unloading->info }}</td>
                    <td>{{ $unloading->created_at }}</td>
                    <td><a href="{{ route('admin.form.unloading.destroy', ['unloading' => $unloading]) }}"
                           class="delete" style="color: red;"> Уд.</a></td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Записей нет</td>
                </tr>
            @endforelse
            </tbody>
        </table>
        <div class="w-100 d-flex justify-content-center"
        {{ $unloadingList->links() }}
    </div>
    </div>
    <script src="{{ asset('assets/js/admin/script.js') }}"></script>
@endsection
