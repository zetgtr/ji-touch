<div class="card-header card-header-divider mb-5">
    <div>
        <h4>Название сайта</h4>
    </div>
</div>

<div class="form-group">
    <label for="sitename">Название сайта:</label>
    <input type="text" name="site_name" value="{{ old('site_name') ? old('site_name') : $settings->site_name }}" maxlength="255" class="form-control @error('site_name') is-invalid @enderror">
    <x-error error-value="site_name" />
</div>
<div class="form-group">
    <label for="sitebanner">Лого сайта:</label>
    <div class="input-group">
                    <span class="input-group-btn">
                      <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-default">
                        <i class="fa fa-picture-o"></i> Загрузка
                      </a>
                    </span>
        <input id="thumbnail" class="form-control" type="text" name="site_banner" value="{{ old("site_banner") ? old("site_banner") : $settings->site_banner }}">
        <x-error error-value="images" />
    </div>
    <div class="pb-0 mt-3">
        <ul id="lightgallery" class="list-unstyled row">
            @if(old("site_banner"))
                <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                    data-responsive="{{old("site_banner")}}"
                    data-src="{{old("site_banner")}}">
                    <a href="javascript:void(0)">
                        <img class="img-responsive br-5" src="{{old("site_banner")}}" alt="Thumb-1">
                    </a>
                </li>
            @elseif($settings->site_banner)
                <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                    data-responsive="{{$settings->site_banner}}"
                    data-src="{{$settings->site_banner}}">
                    <a href="javascript:void(0)">
                        <img class="img-responsive br-5" src="{{$settings->site_banner}}" alt="Thumb-1">
                    </a>
                </li>
            @endif
        </ul>
    </div>
    <x-error error-value="site_banner" />
</div>
<div class="row">
    <div class="col-xl-6">
        <div class="form-group">
            <label for="username">Ваше имя:</label>
            <input type="text" name="user_name" value="{{ old('user_name') ? old('user_name') : $settings->user_name }}" maxlength="32" class="form-control @error('user_name') is-invalid @enderror">
            <x-error error-value="user_name" />
        </div>
    </div>
    <div class="col-xl-6">
        <div class="form-group">
            <label for="siteemail">E-mail администратора:</label>
            <input type="text" name="site_email" value="{{ old('site_email') ? old('site_email') : $settings->site_email }}" maxlength="128" class="form-control @error('site_email') is-invalid @enderror">
            <x-error error-value="site_email" />
        </div>
    </div>
</div>


<template id="template-gallery">
    <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0">
        <a href="javascript:void(0)">
            <img class="img-responsive br-5" alt="Thumb-1">
        </a>
    </li>
</template>

<script src="{{ asset('assets/plugins/gallery/lightgallery.js') }}"></script>
<script src="{{ asset('assets/plugins/gallery/lightgallery-1.js') }}"></script>
<script src="{{ asset('assets/js/admin/lfm.js') }}"></script>
<script>
    $('#lfm').filemanager('image', {
        multiple: false,
        prefix: '/laravel-filemanager'
    });
</script>
