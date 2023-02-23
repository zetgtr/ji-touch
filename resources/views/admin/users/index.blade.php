@extends('layouts.admin')
@section('title', __('admin/user.title'))
@section('content')
    <div class="row row-cards">
        <div class="col-lg-12 col-xl-12">
            <x-admin.content.search />
            <div class="card">
                <x-admin.users.header :users="$users" />
                <div class="e-table px-5 pb-5">
                    <div class="table-responsive table-lg">
                        <table class="table border-top table-bordered mb-0">
                            <x-admin.users.table.head />
                            <tbody>
                            @foreach($users as $user)
                                <x-admin.users.table.tr :user="$user"/>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                {{$users->links()}}
            </div>
        </div>
        <!-- COL-END -->
    </div>
@endsection
