
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <link href="{{  asset("assets/css/bootstrap.min.css") }}" rel="stylesheet" crossorigin="anonymous">
    <script src="{{ asset('assets/js/home/jquery.min.js') }}"></script>
    <!-- Favicons -->
    <meta name="theme-color" content="#712cf9">

    <!-- Custom styles for this template -->
    <link href="{{  asset("assets/css/admin/dashboard.css") }}" rel="stylesheet">
</head>
<body>

<x-admin.header></x-admin.header>

<div class="container-fluid">
    <div class="row">
        <x-admin.sitebar></x-admin.sitebar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            @yield('content')
        </main>


    </div>
</div>


<script src="{{ asset('assets/js/admin/bootstrap.bundle.min.js') }}" crossorigin="anonymous"></script>
<script src="{{ asset('assets/js/admin/feather.min.js') }}" crossorigin="anonymous"></script>
<script src="{{ asset('assets/js/admin/Chart.min.js') }}" crossorigin="anonymous"></script>
<script src="{{ asset('assets/js/admin/dashboard.js') }}"></script>

</body>
</html>
