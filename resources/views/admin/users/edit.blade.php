@extends('layouts.admin')
@section('title', __('admin/user.edit',['name'=>$user->name]))
@section('content')

        <div class="row">
            <div class="col-xl-4">
                <x-admin.users.profile.edit-password :user="$user"/>
            </div>
            <div class="col-xl-8">
                <x-admin.users.profile.edit-profile :user="$user" />
            </div>
        </div>
@endsection
