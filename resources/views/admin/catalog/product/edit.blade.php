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
            <form action="{{ route('admin.catalog.product.update',['product'=>$product]) }}" method="post" class="row row-page-create">
                @csrf
                @method('PUT')
                <input type="hidden" value="{{$product->id}}" name="id">
                <div class="tab-content">
                    <x-admin.catalog.product.edit.content :product="$product" />
                    <x-admin.catalog.product.edit.seo :product="$product" />
                    <x-admin.catalog.product.edit.photo :product="$product" />
                </div>
                <div>
                    <input type="submit" value="Сохранить" class="btn btn-success btn-sm">
                </div>
            </form>
        </div>
    </div>
@endsection
