<div class="tab-pane active" id="content" role="tabpanel">
    <div class="row">
        <div class="col-lg-7">
            <div class="form-grop mb-3">
                <label for="title">Заголовок</label>
                <input id="title" class="form-control @error('title') is-invalid @enderror" name="title" value="{{old('title')}}" />
                <x-error error-value="title" />
            </div>
            <div class="form-group mb-3">
                <label for="my-editor" >Описание</label>
                <textarea name="description" id="my-editor" class="form-control @error('description') is-invalid @enderror my-editor">{{ old('description') }}</textarea>
                <x-error error-value="description" />
            </div>
            <div class="form-group mb-3">
                <label for="content" >Контент</label>
                <textarea name="content" id="my-editor" class="form-control @error('content') is-invalid @enderror my-editor">{{ old('content') }}</textarea>
                <x-error error-value="content" />
            </div>
        </div>
        <div class="col-lg-5">
            <div class="form-group">
                <label for="category">Категория</label>
                <select name="category" id="category" class="form-select">
{{--                    @foreach($categories as $category)--}}
{{--                        <option value="{{ $category->id }}">{{ $category->name }}</option>--}}
{{--                    @endforeach--}}
                </select>
            </div>
            <div class="form-group">
                <label for="access">Доступ</label>
                <select name="access" id="access" class="form-select">
                    <option  value="0" selected="">Общий</option>
                    <option value="101">Пользователь</option>
                    <option value="102">Администратор</option>
                    <option value="103">Супер Администратор</option>
                </select>
            </div>
            <div class="form-group" style="position:relative;">
                <label for="date_news">Дата публикации (необязательно):</label>
                <input type="text" data-language="ru" name="created_at" id="addDates" class="form-control" value="">
            </div>
            <div class="form-group ">
                <label for="">Изображения</label>
                <div class="input-group">
                    <span class="input-group-btn">
                      <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-default">
                        <i class="fa fa-picture-o"></i> Загрузка
                      </a>
                    </span>
                    <input id="thumbnail" class="form-control @error('file_news') is-invalid @enderror" type="text" name="thumbnail[]" value="{{ old('thumbnail') }}">
                    <x-error error-value="file_news" />
                </div>
                <div class="pb-0 mt-3">
                    <ul id="lightgallery" class="list-unstyled row">
                        <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                            data-responsive="../assets/images/media/files/01.jpg"
                            data-src="../assets/images/media/files/01.jpg"
                            <a href="javascript:void(0)">
                                <img class="img-responsive br-5" src="../assets/images/media/files/01.jpg" alt="Thumb-1">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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
        multiple: true,
        prefix: '/laravel-filemanager'
    });
</script>

@vite('resources/js/utils/AirDatepicker.js')
