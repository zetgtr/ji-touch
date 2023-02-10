@extends('layouts.main')
@section('menu')
    <x-menu :category="$category"></x-menu>
@endsection
@section('content')
    <section class="u-clearfix u-grey-90 u-section-1" id="carousel_9d0a">

        <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
            <div class="u-layout">
                <div class="u-layout-row">
                    @if (session('success'))
                        <x-alert type="success" message="{{ session('success') }}"></x-alert>
                    @endif
                    @if ($errors->any())
                        @foreach($errors->all() as $error)
                            <x-alert type="danger" :message="$error"></x-alert>
                        @endforeach
                    @endif
                    <div class="u-container-style u-layout-cell align-items-center d-flex u-shape-rectangle u-size-36 u-layout-cell-1 row">
                        <div class="col-lg-7 u-container-layout u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                            <div class="u-container-style u-group u-palette-2-base u-group-1">
                                <div class="u-container-layout u-valign-middle u-container-layout-2">
                                    <h6 class="u-text u-text-body-alt-color u-text-default u-text-1">Новостной блог<br>
                                    </h6>
                                    <h2 class="u-text u-text-body-alt-color u-text-default u-text-2">О нас</h2>
                                </div>
                            </div>
                            <p class="u-align-left u-text u-text-3">Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient.</p>
                            <p class="u-align-left u-text u-text-grey-15 u-text-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.<br>
                                <br><button type="button" class="btn btn-about" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Обратная связь
                                </button>
                            </p>
                        </div>
                        <div class=" col-lg-5">
                            <img class="w-100" src="{{ asset("assets/img/about.jpg") }}" rel="stylesheet" crossorigin="anonymous">
                        </div>
                    </div>
                    <x-modal title="Обратная связь" :content="$aboutForm"></x-modal>
                </div>
            </div>
        </div>
    </section>
@endsection
