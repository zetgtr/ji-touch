@extends('layouts.main')
@section('menu')
    <x-menu :category="$category"></x-menu>
@endsection
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h3>Добро пожаловать {{ Auth::user()->name }}</h3>
            </div>
            @if(Auth::user()->is_admin)
                <div class="col-lg-12">
                    <a href="{{ route('admin.index') }}">В админку</a>
                </div>
            @endif
        </div>
    </div>
@endsection
