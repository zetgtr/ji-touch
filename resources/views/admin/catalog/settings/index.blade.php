@extends('layouts.admin')
@section('title',"Настройки")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header">
            <h3 class="card-title">Настройки</h3>
        </div>
        <div class="card-body">
            <x-admin.catalog.settings />
        </div>
    </div>
@endsection
