@extends('layouts.main')
@section('menu')
    <x-menu :category="$category"></x-menu>
@endsection
@section('content')
    <section class="u-clearfix u-section-1 h-100" id="carousel_787e">
        <div class="u-clearfix u-expanded-width u-layout-wrap h-100">
            <div class="u-layout h-100">
                <div class="u-layout-row row d-flex align-items-center h-100">
                    <div class=" col-lg-5">
                        <img class="w-100" src="{{ asset("assets/img/about.jpg") }}" rel="stylesheet" crossorigin="anonymous">
                    </div>
                    <div class="u-container-style col-lg-7 u-layout-cell u-size-25 u-layout-cell-2">
                        <div class="u-container-layout u-valign-middle u-container-layout-2">
                            @if (session('success'))
                                <x-alert type="success" message="{{ session('success') }}"></x-alert>
                            @endif
                            @if ($errors->any())
                                @foreach($errors->all() as $error)
                                    <x-alert type="danger" :message="$error"></x-alert>
                                @endforeach
                            @endif
                            <h6 class="u-custom-font u-text u-text-font u-text-1">Every Mind Matters</h6>
                            <h1 class="u-text u-text-2">Do not</h1>
                            <h3 class="u-text u-text-3"> stay glued to the news</h3>
                            <p class="u-text u-text-grey-40 u-text-4">Try to limit the time you spend watching, reading or listening to coverage of the outbreak, including on social media, and think about turning off breaking-news alerts on your phone.&nbsp;</p>
                            <span class="u-icon u-icon-circle u-text-black u-icon-1">
                                <svg data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="u-svg-content show_news_swg" viewBox="0 0 476.213 476.213" x="0px" y="0px" id="svg-96c6" style="enable-background:new 0 0 476.213 476.213;"><polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5   345.606,368.713 476.213,238.106 "></polygon>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <x-modal title="Получение выгрузки данных" :content="$showForm"></x-modal>
    </section>
@endsection
