@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Формы обратной связи</h1>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#ID</th>
                <th>Пользователь</th>
                <th>Комментарий</th>
                <th>Дата добавления</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            @forelse($feedbacks as $feedback)
                <tr>
                    <td>{{ $feedback->id }}</td>
                    <td>{{ $feedback->user }}</td>
                    <td>{{ $feedback->comment }}</td>
                    <td>{{ $feedback->created_at }}</td>
                    <td><a href="{{ route('admin.form.feedback.destroy', ['feedback' => $feedback]) }}" class="delete" style="color: red;"> Уд.</a> </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7">Записей нет</td>
                </tr>
            @endforelse
            </tbody>
        </table>
        <div class="w-100 d-flex justify-content-center"
        {{ $feedbacks->links() }}
    </div>
    </div>
    <script src="{{ asset('assets/js/admin/script.js') }}"></script>
@endsection
