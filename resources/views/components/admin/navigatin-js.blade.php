<link id="style" href="{{asset('assets/css/admin/menu-style.css')}}" rel="stylesheet" />
<div class="card-body">
    <ul class="nav panel-tabs nav1 br-7" role="tablist">
        <li class="nav-item1">
            @foreach($links as $link)
                @if(empty($link['show']))
                    <a href="#{{$link['url']}}" class="{{!empty($link['active']) ? "active" : ""}} nav-link" data-bs-toggle="tab" aria-selected="true" role="tab">
                        {{$link['name']}}
                    </a>
                @endif
            @endforeach
        </li>
    </ul>
</div>

