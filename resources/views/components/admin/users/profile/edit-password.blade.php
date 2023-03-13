<div class="card">
    <div class="card-header">
        <div class="card-title">Изменить пароль</div>
    </div>
    <form action="{{ route('admin.password-update') }}" method="POST">
        <div class="card-body">
            <x-warning />
            @csrf
            @method('PUT')
            <input type="hidden" name="id" value="{{ $user->id }}">
            <div class="text-center chat-image mb-5">
                <div class="avatar avatar-xxl chat-profile mb-3 brround">
                    <a class="" href="profile.html">
                        <img alt="avatar" src="{{asset('assets/images/users/13.jpg')}}" class="brround">
                    </a>
                </div>
                <div class="">
                    <a href="profile.html">
                        <h5 class="mb-1 text-dark fw-semibold">{{ $user->name }}</h5>
                    </a>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Новый пароль</label>
                <div class="wrap-input100 validate-input input-group" id="Password-toggle1">
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                        <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                    </a>
                    <input class="input100 form-control" name="password" type="password" placeholder="Новый пароль" autocomplete="new-password">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Повторите пароль</label>
                <div class="wrap-input100 validate-input input-group" id="Password-toggle2">
                    <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                        <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                    </a>
                    <input class="input100 form-control" name="password_confirmation" type="password" placeholder="Повторите пароль" autocomplete="new-password">
                </div>
            </div>
        </div>
        <div class="card-footer text-end">
            <button type="submit" class="btn btn-success">Сохранить</button>
        </div>
    </form>
</div>

<script src="{{ asset('assets/js/show-password.min.js') }}"></script>
