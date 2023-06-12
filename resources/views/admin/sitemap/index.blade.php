@extends('layouts.admin')
@section('title', "Карта сайта")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Карта сайта</h3>
        </div>
        <div class="card-body">
            <div class="tab-content">
                Карта сайта генирируется автаматически при посещении данной страницы.<br> Дата последней генирации: {{ date("d.m.Y H:i") }}
            </div>
        </div>
    </div>
@endsection
