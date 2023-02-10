<article class="article">
    <div class="article-img">
        <a href="{{ route('news.show', ['id' => $news->id]) }}">
            <img src="{{asset('assets/img/'.$news->img)}}" alt="">
        </a>
        <ul class="article-info">
            <li class="article-type"><i class="fa fa-camera"></i></li>
        </ul>
    </div>
    <div class="article-body">
        <h3 class="article-title"><a href="{{ route('news.show', ['id' => $news->id]) }}">{{ $news->title }}</a></h3>
        <ul class="article-meta">
            <li><i class="fa fa-clock-o"></i>{{ $news->created_at }}</li>
            <li><i class="fa fa-comments"></i> 33</li>
        </ul>
        <p>{{ $news->description }}</p>
    </div>
</article>
