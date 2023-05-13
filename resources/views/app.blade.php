{{--<!DOCTYPE html>--}}
{{--<html>--}}
{{--<head>--}}
{{--    {!! $data->header !!}--}}
{{--    @vite('resources/css/app.css')--}}
{{--    <link rel="stylesheet" href="{{ asset('assets/iconfonts/font-awesome/css/font-awesome.min.css') }}">--}}
{{--</head>--}}
{{--<body>--}}
{{--  <div id="app"></div>--}}
{{--  @vite('resources/js/app.js')--}}
{{--</body>--}}
{{--<footer>--}}
{{--    {!! $data->footer !!}--}}
{{--</footer>--}}
{{--</html>--}}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @routes
        @vite('resources/css/app.css')
        <link rel="stylesheet" href="{{ asset('assets/iconfonts/font-awesome/css/font-awesome.min.css') }}">
        @vite('resources/js/app.js')
        @vite('resources/js/assets/scss/index.scss')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
