@extends('layouts.admin')
@section('title',"Новости")
@section('content')
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                    <div class="card overflow-hidden">
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
            </div>
        </div>
    </div>
@endsection
