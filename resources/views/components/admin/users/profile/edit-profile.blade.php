<form action="{{ route('admin.user.update', ['user'=>$user]) }}" method="POST">
    @csrf
    @method('PUT')
    <input type="hidden" name="id" value="{{ $user->id }}">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Редактировать профиль</h3>
        </div>
        <div class="card-body">
            <x-warning />
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                        <label for="exampleInputname1">Фамилия</label>
                        <input type="text" name="last_name" class="form-control @error('last_name') is-invalid @enderror" value="{{ old('last_name') ? old('last_name') : $user->last_name }}" id="exampleInputname1" placeholder="Фамилия">
                        <x-error error-value="last_name" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                        <label for="exampleInputname">Имя</label>
                        <input type="text" name="first_name" class="form-control @error('first_name') is-invalid @enderror" value="{{ old('first_name') ? old('first_name') : $user->first_name }}"  id="exampleInputname" placeholder="Имя">
                        <x-error error-value="first_name" />
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleInputLogin">Логин</label>
                    <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" value="{{ old('name') ? old('name') : $user->name }}"  id="exampleInputLogin" placeholder="Логин">
                    <x-error error-value="name" />
                </div>
                <div class="form-group col-md-6">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') ? old('email') : $user->email }}"  id="exampleInputEmail1" placeholder="Email">
                    <x-error error-value="email" />
                </div>
                <x-admin.users.profile.role :user="$user" />
                <div class="form-group col-md-6">
                    <label for="">Автар</label>
                    <div class="input-group">
                    <span class="input-group-btn">
                      <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-default">
                        <i class="fa fa-picture-o"></i> Загрузка
                      </a>
                    </span>
                        <input id="thumbnail" class="form-control" type="text" name="avatar" value="{{ old("avatar") ? old("avatar") : $user->avatar }}">
                        <x-error error-value="images" />
                    </div>
                    <div class="pb-0 mt-3">
                        <ul id="lightgallery" class="list-unstyled row">
                            @if(old("avatar"))
                                <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                                    data-responsive="{{old("avatar")}}"
                                    data-src="{{old("avatar")}}">
                                    <a href="javascript:void(0)">
                                        <img class="img-responsive br-5" src="{{old("avatar")}}" alt="Thumb-1">
                                    </a>
                                </li>
                            @elseif($user->avatar)
                                <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                                    data-responsive="{{$user->avatar}}"
                                    data-src="{{$user->avatar}}">
                                    <a href="javascript:void(0)">
                                        <img class="img-responsive br-5" src="{{$user->avatar}}" alt="Thumb-1">
                                    </a>
                                </li>
                            @endif
                        </ul>
                    </div>
                </div>
                <div class="form-group col-md-6 d-flex align-items-center">
                    <label class="custom-switch ps-0">
                        <input type="checkbox" name="is_admin" class="custom-switch-input" @if($user->is_admin || old('is_admin')) checked @endif>
                        <span class="custom-switch-indicator me-3"></span>
                        <span class="custom-switch-description mg-l-10">Доступ в админку</span>
                    </label>
                </div>
            </div>

        </div>
        <div class="card-footer text-end">
            <button type="submit" class="btn btn-success">Сохранить</button>
        </div>
    </div>
</form>
<script src="{{ asset('assets/js/admin/lfm.js') }}"></script>
<script>
    $('#lfm').filemanager('image', {
        multiple: false,
        prefix: '/laravel-filemanager'
    });
</script>