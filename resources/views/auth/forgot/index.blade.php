@extends('layouts.auth')
@section('title',__('Forgot title'))
@section('content')
    <div class="container-login100">
        <div class="wrap-login100 p-6">
            <form class="login100-form validate-form" method="POST" action="{{ route('password.email') }}">
                @csrf
                                <span class="login100-form-title pb-5">
                                    {{ __('Forgot title') }}
                                </span>
                <p class="text-muted">{{ __('Forgot text') }}</p>
                <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                        <i class="zmdi zmdi-email" aria-hidden="true"></i>
                    </a>
                    <input class="input100 border-start-0 ms-0 form-control" name="email" value="{{ old('email') }}" type="email" placeholder="{{__('Email address')}}">
                </div>

                    <button type="submit" class="btn btn-primary d-grid">{{ __('Submit') }}</button>

                <div class="text-center mt-4">
                    <p class="text-dark mb-0">{{__("Forgot It?")}}<a class="text-primary ms-1" href="{{ route('login') }}">{{__('Sign In')}}</a></p>
                </div>
            </form>
        </div>
    </div>
@endsection
