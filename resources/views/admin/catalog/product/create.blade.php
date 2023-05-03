@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header">
            <h3 class="card-title">Добавить товар</h3>
        </div>
        <x-admin.navigatin-js :links="$navigation" />
        <div class="card-body">
            <x-warning />
            <form action="{{ route('admin.catalog.product.store') }}" method="post" class="row row-page-create">
                @csrf
                <div class="tab-content">
                    <x-admin.catalog.product.create.content />
                    <x-admin.catalog.product.create.seo />
                    <x-admin.catalog.product.create.photo />
                </div>
                <div>
                    <input type="submit" value="Сохранить" class="btn btn-success btn-sm">
                </div>
            </form>
        </div>
    </div>
@endsection
