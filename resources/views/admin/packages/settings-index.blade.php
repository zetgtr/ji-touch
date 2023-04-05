@extends('layouts.admin')
@section('title',"Редактор пакетов")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Редактор пакетов</h3>
        </div>
        <x-admin.navigation :links="$links" />
        <div class="card-body">
            <x-admin.packages.settings />
        </div>
    </div>
@endsection
