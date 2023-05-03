@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header">
            <h3 class="card-title">Товары</h3>
        </div>
        <div class="card-body">
            <x-admin.catalog.product.index />
        </div>
    </div>
@endsection
