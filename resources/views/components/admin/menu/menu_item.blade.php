@if(count($item) > 0)
    @foreach($item as $itemParent)
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)">
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

