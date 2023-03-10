@extends('layouts.admin')
@section('title',"Создание страниц")
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h4>Создание страницы</h4>
                        <span class="card-header-subtitle">Внесите необходимые изменения и сохраните страницу.</span>
                    </div>
                </div>
                <div class="card-body">
                    <x-admin.page.create-page />
                </div>
            </div>
        </div>
    </div>
@endsection
