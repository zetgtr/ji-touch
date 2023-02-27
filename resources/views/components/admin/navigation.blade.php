<div class="card">
    <div class="card-body">
        <ul class="nav1 br-7">
            @foreach($links as $link)
                <li class="nav-item1">
                    <a class="nav-link {{!empty($link['active']) ? "disabled" : ""}}" href="{{$link['url']}}">{{$link['name']}}</a>
                </li>
            @endforeach
        </ul>
    </div>
</div>
