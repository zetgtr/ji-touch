@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header">
            <h3 class="card-title">Список категорий</h3>
        </div>
        <div class="card-body">
            <x-warning />
            <div class="row row-page-create">
                <div class="col-md-8 order-md-first">
                    <div class="dd nestable" id="nestable">
                        <x-admin.catalog.category :categories="$categories"/>
                    </div>
                </div>
                <div class="col-md-4 order-md-first d-flex align-items-start justify-content-end">
                    <a href="{{ route('admin.catalog.category.create') }}" class="btn btn-primary">Добавить категорию</a>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" id="route_dd" value="{{  route('admin.catalog.category.order') }}">
    <script src="{{asset('assets/js/admin/dnd.js')}}" ></script>
    <script src="{{asset('assets/js/admin/delete.js')}}" ></script>
@endsection
