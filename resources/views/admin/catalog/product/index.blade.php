@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header d-flex justify-content-between">
            <div>
                <h3 class="card-title">Товары</h3>
            </div>
            <div>
                <a data-id="1" data-name="text" class="btn btn-sm search modal-effect btn-warning badge" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8" type="button">Поиск</a>
                <a href="{{ route('admin.catalog.product.create') }}" class="btn btn-sm btn-outline-primary">
                    <small>Добавить позицию</small>
                </a>
            </div>
        </div>
        <div class="card-body">
            <x-admin.catalog.product.index />
        </div>
    </div>
    <x-admin.modal title="Поиск" id="search" />
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <x-admin.catalog.product.seach />
    <script src="{{ asset('assets/js/admin/catalog/search.js') }}"></script>
@endsection
@section("breadcrumb")
    <div>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route("admin.index")}}">Главная</a></li>
            <li class="breadcrumb-item active" aria-current="page">Каталог</li>
        </ol>
    </div>
@endsection
