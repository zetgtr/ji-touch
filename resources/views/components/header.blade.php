<header id="header" class="header">
    <div class="container header-container">
        <div class="header__wrapper">
            <div class="header__logo">
                <a href="">
                    <img src="{{ asset('assets/img/logotype.svg') }}" alt="Logo">
                </a>
            </div>
            <nav class="nav">
                <ul class="nav__list list-reset">
                    @foreach($headers as $header)
                        <li class="nav__item"><a class="{{ $header->url }}" href="/">{{ $header->name }}</a></li>
                    @endforeach
                </ul>
            </nav>
            <div class="header__right">
                <a class="header__num" href="tel:+7 905 262 49 68">+7 905 262 49 68</a>

            </div>
        </div>
        <button class="burger btn-reset" id="burger-btn">
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </div>
</header>
