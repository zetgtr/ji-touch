@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header">
            <h3 class="card-title">Добавить категорию</h3>

        </div>
        <x-admin.navigatin-js :links="$navigation" />
        <div class="card-body">
            <x-warning />
            <form action="{{ route('admin.catalog.category.store') }}" method="post" class="row row-page-create">
                @csrf
                <div class="tab-content">

                    <x-admin.catalog.create.content />
                    <x-admin.catalog.create.seo />
                    <x-admin.catalog.create.photo />
                </div>
                <div>
                    <input type="submit" value="Сохранить" class="btn btn-success btn-sm">
                </div>
            </form>
        </div>
    </div>
@endsection
