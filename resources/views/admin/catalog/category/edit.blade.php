@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header">
            <h3 class="card-title">Редактировать категорию</h3>
        </div>
        <x-admin.navigatin-js :links="$navigation" />
        <div class="card-body">
            <x-warning />
            <form action="{{ route('admin.catalog.category.update',['category'=>$category]) }}" method="post" class="row row-page-create">
                @csrf
                @method('PUT')
                <div class="tab-content">

                    <x-admin.catalog.edit.content :category="$category" />
                    <x-admin.catalog.edit.seo :category="$category" />
                    <x-admin.catalog.edit.photo :category="$category" />
                </div>
                <div>
                    <input type="submit" value="Сохранить" class="btn btn-success btn-sm">
                </div>
            </form>
        </div>
    </div>
@endsection
