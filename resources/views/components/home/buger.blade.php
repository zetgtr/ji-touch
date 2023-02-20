<section class="bur" id="buger">
    <div class="container">
        <div class="bur__wrapper">
            <ul class="bur__menu list-reset">
                @foreach($burgers as $burger)
                    <li style="--clr:#00ade1">
                        <a data-text="&nbsp;{{$burger['name']}}&nbsp;" href="{{$burger['url']}}">&nbsp;{{$burger['name']}}&nbsp;</a>
                    </li>
                @endforeach
            </ul>
            <div class="bur__footer">
                <div class="address">
                    <h4 class="title">г. Санкт-Петербург</h4>
                    <p>г. Петергоф, Санкт-Петербургский пр., <br>
                        д. 60, лит. Ф, БЦ «Ракета», офис 210</p>
                </div>
                <div class="contacts">
                    <a href="tel:+7 905 262 49 68">+7 905 262 49 68</a>
                    <b></b>
                    <a href="mailto:info@ji-touch.ru">info@ji-touch.ru</a>
                </div>
                <div class="social">
                    <a href="https://vk.com/jitouch" target="_blank" class="item vk"></a>
                </div>
            </div>
        </div>
    </div>
</section>
