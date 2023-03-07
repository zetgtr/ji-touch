@extends('layouts.admin')
@section('title',"Новости")
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <x-admin.navigatin-js :links="$links" />
                <div class="tab-content">
                    <div class="tab-pane @foreach($links as $link) @if(!empty($link['active']) && $link['url'] === \App\Enums\NewsEnums::NEWS->value) active @endif @endforeach" id="news" role="tabpanel">
                        <x-admin.news.news />
                    </div>
                    <div class="tab-pane @foreach($links as $link) @if(!empty($link['active']) && $link['url'] === \App\Enums\NewsEnums::POST->value) active @endif @endforeach" id="post" role="tabpanel">
                        <x-admin.news.create :links="$linksContent" />
                    </div>
                    <div class="tab-pane @foreach($links as $link) @if(!empty($link['active']) && $link['url'] === \App\Enums\NewsEnums::CATEGORY->value) active @endif @endforeach" id="category_news" role="tabpanel">
                        <x-admin.news.category />
                    </div>
                    <div class="tab-pane" id="settings" role="tabpanel">
                        <x-admin.news.settings />
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
