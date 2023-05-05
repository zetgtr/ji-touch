@if(!empty($products) && count($products) > 0)
    <ol class="dd-list">
        @foreach($products as $item)
            <li class="dd-item delete-element" data-id="{{$item->id}}" data-name="{{$item->title}}">
                <div class="dd-handle">
                    <span>{{$item->title}}</span>
                </div>
                <div class="dnd-edit show-dnd">
                    <a href="{{route('admin.catalog.product.destroy', ['product'=>$item])}}" class="button-delete delete btn btn-danger btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <a href="{{route('admin.catalog.product.edit', ['product'=>$item])}}" class="button-edit btn btn-warning btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    @if($item->pivot->publish)
                        <a href="{{ route('admin.catalog.product.publish', ['product'=>$item,'category'=>$category]) }}" class="btn btn-success show-publish">
                            <i class="far fa-eye"></i>
                        </a>
                    @else
                        <a href="{{ route('admin.catalog.product.publish', ['product'=>$item,'category'=>$category]) }}" class="btn btn-default show-publish">
                            <i class="far fa-eye-slash"></i>
                        </a>
                    @endif
                </div>
                @if($item->parent instanceof \Illuminate\Database\Eloquent\Collection)
                    <x-admin.page.page-list :pages="$item->parent" :category="$category" />
                @endif
            </li>
        @endforeach
    </ol>
@else
    <span>Товары отсутствуют</span>
@endif
