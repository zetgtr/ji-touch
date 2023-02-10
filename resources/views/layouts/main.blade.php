<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href={{ asset("assets/css/bootstrap.min.css") }} rel="stylesheet" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700%7CLato:300,400" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{ asset('assets/css/home/owl.carousel.css') }}" />
    <link type="text/css" rel="stylesheet" href="{{ asset('assets/css/home/owl.theme.default.css') }}" />
    <!-- Font Awesome Icon -->
    <link rel="stylesheet" href="{{ asset('assets/css/home/font-awesome.min.css') }}">
    <!-- Custom stlylesheet -->
    <link type="text/css" rel="stylesheet" href="{{ asset('assets/css/home/style.css') }}"/>
    <link rel="stylesheet" href="{{ asset("assets/css/info/nicepage-site.css") }}">
    <link rel="stylesheet" href="{{ asset('assets/css/info/style.css') }}">
    <script src="{{ asset('assets/js/home/jquery.min.js') }}"></script>
    <script src="https://kit.fontawesome.com/7c4e062852.js" crossorigin="anonymous"></script>

    <meta name="theme-color" content="#712cf9">
</head>
<body>

    <x-header></x-header>

    <main>
        @yield('content')
    </main>

    <x-footer></x-footer>

    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}" crossorigin="anonymous"></script>


</body>
</html>
