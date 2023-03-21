<!DOCTYPE html>
<html lang="ru">
<head>
    {!! $data->header !!}
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="{{ asset('assets/iconfonts/font-awesome/css/font-awesome.min.css') }}">
    <title>{{ $data->title }}</title>
</head>
<body>
  <div id="app"></div>
  @vite('resources/js/app.js')
</body>
<footer>
    {!! $data->footer !!}
</footer>
</html>
