@extends('layouts.admin')
@section('title',"Редактор пакетов")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Редактор пакетов</h3>
        </div>
        <div class="card-body">
            <x-admin.packages.packages :packages="$packages"/>
        </div>
    </div>
@endsection
