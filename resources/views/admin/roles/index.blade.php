@extends('layouts.admin')
@section('title', __('admin/user.title'))
@section('content')
    <div class="row row-cards">
        <div class="col-lg-12 col-xl-12">
{{--            <x-admin.content.search />--}}
            <div class="card">
                <x-admin.roles.header :roles="$roles" />
                <div class="e-table px-5 pb-5">
                    <div class="table-responsive table-lg">
                        <table class="table border-top table-bordered mb-0">
                            <x-admin.roles.table.head />
                            <tbody>
                            @foreach($roles as $role)
                                <x-admin.roles.table.tr :role="$role"/>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
{{--    <x-admin.roles.modal />--}}
@endsection
