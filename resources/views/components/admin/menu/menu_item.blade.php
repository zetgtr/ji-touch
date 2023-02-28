@if(count($item) > 0)
    @foreach($item as $itemParent)
        <li class="slide">
            @php
                $url = str_replace("/",".",$itemParent->url);
                $url .= $itemParent->controller_type ? "" : ".index"
            @endphp
            <a class="side-menu__item" @if(count($itemParent->parent) > 0) data-bs-toggle="slide" @endif href="@if($itemParent->url){{ route('admin.'.$url) }} @endif">
                <i class="side-menu__icon fe fe-cpu"></i>
                <span class="side-menu__label">{{ $itemParent->name }}</span>
                @if(count($itemParent->parent) > 0)
                    <i class="angle fe fe-chevron-right"></i>
                @endif
            </a>
            @if($itemParent->parent)
                <ul class="slide-menu">
                    <x-admin.menu.menu_item :item="$itemParent->parent" />
                </ul>
            @endif
        </li>
    @endforeach
@endif

