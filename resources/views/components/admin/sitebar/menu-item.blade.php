@foreach($menus as $menu)
    <div class="p-3 fw-semibold ps-5">{{$menu->name}}</div>

    <div class="card-body pt-2">
        <div class="browser-stats">
            @forelse($menu->parent as $parent)
                <div class="row mb-4">
                    <div class="col-sm-2 mb-sm-0 mb-3">
                    <span class="feeds avatar-circle brround bg-primary-transparent">
                        <i class="{{ $parent->logo }} text-primary"></i>
                    </span>
                    </div>
                    <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                            <h6 class="">{{ $parent->name }}</h6>
                            <div>
                                @php
                                    $url = str_replace("/",".",$parent->url);
                                    $url .= $parent->controller_type ? "" : ".index"
                                @endphp
                                <a href="@if($parent->url){{ route('admin.'.$url) }} @endif"><i class="fe fe-settings me-1"></i></a>
{{--                                <a href="javascript:void(0)"><i class="fe fe-x"></i></a>--}}
                            </div>
                        </div>
                    </div>
                </div>
            @empty
               <div class="danger">Пусто</div>
            @endforelse
        </div>
    </div>
@endforeach
