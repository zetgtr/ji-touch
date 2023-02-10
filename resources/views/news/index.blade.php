@extends('layouts.main')
@section('menu')
    <x-menu :category="$category"></x-menu>
@endsection
@section('content')
    <x-home.carusel></x-home.carusel>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <!-- Column 1 -->
                        <div class="col-md-6 col-sm-6">
                            <!-- section title -->
                            <div class="section-title">
                                <h2 class="title">Новости</h2>
                            </div>
                            <x-home.news_big :news="$news[rand(0,24)]"></x-home.news_big>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <!-- section title -->
                            <div class="section-title">
                                <h2 class="title">Спорт</h2>
                            </div>
                            <x-home.news_big :news="$sport[rand(0,4)]"></x-home.news_big>
                        </div>
                    </div>
                    <div class="row">
                        <!-- section title -->
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2 class="title">Новости</h2>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <x-home.news_big :news="$news[rand(0,24)]"></x-home.news_big>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <x-home.news_big :news="$news[rand(0,24)]"></x-home.news_big>
                        </div>
                    </div>
                    <div class="row">
                        <x-home.news></x-home.news>
                    </div>
                </div>
                <x-home.aside></x-home.aside>
            </div>
        </div>
    </div>

    <script src="{{ asset('assets/js/home/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('assets/js/home/main.js') }}"></script>
@endsection
