@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Формы</h1>
    </div>
    <div class="h-100 w-100 d-flex align-items-center justify-content-around">
        <a href="{{ route('admin.form.feedback.index') }}" type="button" class="btn btn-outline-success">Форма обратной связи</a>
        <a href="{{ route('admin.form.unloading.index') }}" type="button" class="btn btn-outline-success">Форма выгрузки</a>
    </div>
@endsection
