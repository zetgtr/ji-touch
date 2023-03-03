@extends('layouts.admin')
@section('title',"Новости")
@section('content')
    <div class="row">
        <div class="col-lg-12 col-xl-9 order-2 order-xl-1">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h4>Создание новости</h4>
                        <span class="card-header-subtitle">Заполните необходимые поля и сохраните новость.</span>
                    </div>
                </div>
                <x-admin.navigatin-js :links="$links" />
                <div class="card-body">
                    <div class="tab-content">
                        <x-admin.news.content />
                        <div class="tab-pane" id="photo" role="tabpanel">
                            2222
                        </div>
                        <div class="tab-pane" id="seo" role="tabpanel">
                            3333
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-xl-3 order-1 order-xl-2" >
            <div class="card">
                <div class="card-body">
                    <div class="card-header card-header-divider">
                        <div>
                            <h4>Текущие новости</h4>
                            <span class="card-header-subtitle">Выберите из списка новость для ее редактирования или удаления.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
