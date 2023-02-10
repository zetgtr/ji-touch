<div class="row">
    <div class="col-sm-12 row offset-md-1 py-4">
        <div class="col-8">
            <h4 class="text-white">Категории</h4>
            <ul class="list-unstyled">
                @foreach($category as $item)
                    <li><a href="{{ route('news',$item['id']) }}" class="text-white">{{$item['title']}}</a></li>
                @endforeach
            </ul>
        </div>
        <div class="col-4 mt-4 ">
            <a role='button' href="{{ route('login') }}" class="text-white m-3">Вход</a>
            <a role='button' href="{{ route('register') }}" class="text-white">Регистрация</a>
        </div>
    </div>
</div>


