@extends('layouts.admin')
@section('title',"Каталог")
@section('content')
    <div class="card">
        <x-admin.navigation :links="$links" />
        <div class="card-header d-flex justify-content-between">
            <h3 class="card-title">Товары</h3>
            <div>
                <input type="button" class="btn-warning btn btn-sm" value="Поиск">
                <a href="{{ route('admin.catalog.product.create') }}" class="btn btn-sm btn-outline-primary">
                    <small>Добавить позицию</small>
                </a>
            </div>
        </div>
        <div class="card-body">
            <x-warning />
            <div class="row row-page-create">
                @if(count($categories) > 0)
                    <div class="col-lg-6">
                        <label>Категории</label>
                        <x-admin.catalog.product.category :categories="$categories" />
                    </div>
                @endif
                <div class="col-lg-6">
                    <label>Товары</label>
                    <div class="dd nestable" id="nestable">
                        <x-admin.catalog.product.list :products="$products" />
                    </div>
                </div>

            </div>
        </div>
    </div>
    <input type="hidden" id="route_dd" value="{{  route('admin.page.order') }}">
    <script src="{{asset('assets/js/admin/dnd.js')}}" ></script>
    <script src="{{asset('assets/js/admin/delete.js')}}" ></script>
@endsection

@section('breadcrumb')
    <div>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{route("admin.index")}}">Главная</a></li>
            @if(count($breadcrumb)>0)
                <li class="breadcrumb-item"><a href="{{route("admin.catalog.product.index")}}">Каталог</a></li>
                @foreach($breadcrumb as $item)
                    @if(!$loop->last)
                        <li class="breadcrumb-item"><a href="{{$item['url']}}">{{$item['title']}}</a></li>
                    @else
                        <li class="breadcrumb-item active" aria-current="page">{{$item['title']}}</li>
                    @endif
                @endforeach
            @else
                <li class="breadcrumb-item active" aria-current="page">Каталог</li>
            @endif
        </ol>
    </div>
@endsection
