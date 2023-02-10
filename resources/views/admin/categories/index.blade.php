@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Категории</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <a href="{{ route('admin.category.create') }}">Добавить категорию</a>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Категория</th>
                <th>Описание</th>
                <th>Дата добавления</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse($categories as $category)
                <tr>
                    <td>{{ $category->id }}</td>
                    <td>{{ $category->title }}</td>
                    <td>{{ $category->description }}</td>
                    <td>{{ $category->created_at }}</td>
                    <td><a href="{{ route('admin.category.edit', ['category' => $category]) }}">Изм.</a> &nbsp; <a href="{{ route('admin.category.destroy', ['category' => $category]) }}" class="delete" style="color: red;"> Уд.</a> </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Записей нет</td>
                </tr>
            @endforelse
            </tbody>
        </table>
        <div class="w-100 d-flex justify-content-center"
        {{ $categories->links() }}
    </div>
    </div>
    <script src="{{ asset('assets/js/admin/script.js') }}"></script>
@endsection
