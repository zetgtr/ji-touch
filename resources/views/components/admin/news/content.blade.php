<div class="tab-pane active" id="content" role="tabpanel">
    <div class="form-grop mb-3">
        <label for="theme">Тема:</label>
        <input id="theme" class="form-control @error('theme') is-invalid @enderror" name="theme" value="{{old('theme')}}" />
        <x-error error-value="theme" />
    </div>
    <div class="form-group mb-3">
        <label for="news" >Новость:</label>
        <textarea name="news" id="my-editor" class="form-control @error('theme') is-invalid @enderror my-editor">{{ old('news') }}</textarea>
        <x-error error-value="news" />
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Изображение новости:</label>
                <div class="input-group">
                    <span class="input-group-btn">
                      <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                        <i class="fa fa-picture-o"></i> Загрузка
                      </a>
                    </span>
                    <input id="thumbnail" class="form-control @error('file_news') is-invalid @enderror" type="text" name="file_news">
                    <x-error error-value="file_news" />
                </div>
                <img id="holder" style="margin-top:15px;max-height:100px;">
            </div>
        </div>
        <div class="col-md-6">
            <label for="date_news">Дата публикации (необязательно):</label>
            <input type="text" data-language="ru" name="created_at" id="addDates" class="form-control" value="">
        </div>
        <hr>
        <div class="col-md-6">
            <select></select>
        </div>
    </div>

</div>

@vite('resources/js/app.js')
<script src="/vendor/laravel-filemanager/js/lfm.js"></script>
<script>
    $('#lfm').filemanager('image');

</script>

{{--<script src="{{ asset('assets/js/admin/air-datapicker/init.js') }}" type="module" ></script>--}}
