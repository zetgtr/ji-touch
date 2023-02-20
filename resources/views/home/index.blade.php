@extends('layouts.main')
@section('content')
    <x-home.animate></x-home.animate>
    <x-home.first :page="$page"></x-home.first>
    <x-home.services></x-home.services>
    <x-home.porfolio></x-home.porfolio>
    <x-home.about></x-home.about>
    <x-home.order></x-home.order>
@endsection
