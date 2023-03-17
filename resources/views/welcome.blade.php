<!DOCTYPE html>
<html>
<head>
    {!! $data->header !!}
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="{{ asset('assets/iconfonts/font-awesome/css/font-awesome.min.css') }}">
</head>
<body>
  <div id="app"></div>
  @vite('resources/js/app.js')
</body>
<footer>
    {!! $data->footer !!}
</footer>
</html>
