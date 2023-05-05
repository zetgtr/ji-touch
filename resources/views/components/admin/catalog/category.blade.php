@if(!empty($categories) && count($categories) > 0)
    <ol class="dd-list">
        @foreach($categories as $item)
            <li class="dd-item delete-element" data-id="{{$item->id}}" data-name="{{$item->title}}">
                <div class="dd-handle">
                    <span>{{$item->title}}</span>
                </div>
                <div class="dnd-edit show-dnd">
                    <a href="{{route('admin.catalog.category.destroy', ['category'=>$item])}}" class="button-delete delete btn btn-danger btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <a href="{{route('admin.catalog.category.edit', ['category'=>$item])}}" class="button-edit btn btn-warning btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    @if($item->publish)
                        <a href="{{ route('admin.catalog.category.publish', ['category'=>$item]) }}" class="btn btn-success show-publish">
                            <i class="far fa-eye"></i>
                        </a>
                    @else
                        <a href="{{ route('admin.catalog.category.publish', ['category'=>$item]) }}" class="btn btn-default show-publish">
                            <i class="far fa-eye-slash"></i>
                        </a>
                    @endif
                </div>
                @if($item->parent instanceof \Illuminate\Database\Eloquent\Collection)
                    <x-admin.catalog.category :categories="$item->parent" />
                @endif
            </li>
        @endforeach
    </ol>
@else
    <span>Категории отсутствуют</span>
@endif
