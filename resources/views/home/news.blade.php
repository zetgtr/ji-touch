@extends('layouts.main')
@section('menu')
    <x-menu :category="$category"></x-menu>
@endsection
@section('content')
    <div class="container">
        <div class="row mb-2 mt-4">
            @foreach($news as $n)
                <div class="col-md-6">
                    <x-home.news_big :news="$n"></x-home.news_big>
                </div>

            @endforeach
        </div>
    </div>
@endsection
