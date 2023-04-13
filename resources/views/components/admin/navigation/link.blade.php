<ol class="dd-list">
    @forelse($link as $item)
        <li class="dd-item delete-element" data-id="{{$item->id}}" data-name="{{$item->title}}">
            <div class="dd-handle">
                <span>{{$item->title}}</span>
            </div>
            @if($item->parent instanceof \Illuminate\Database\Eloquent\Collection)
                <x-admin.navigation.link :link="$item->parent" />
            @endif
        </li>
    @empty
        <li class="dd-empty"></li>
    @endforelse
</ol>
