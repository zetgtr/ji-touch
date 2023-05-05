<div class="tab-pane fade" id="photo" aria-labelledby="photo-link">
    <div class="form-group ">
        <label for="">Изображения</label>
        <div class="input-group">
                    <span class="input-group-btn">
                      <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-default">
                        <i class="fa fa-picture-o"></i> Загрузка
                      </a>
                    </span>
            <input id="thumbnail" class="form-control" type="text" name="images[]" value="{{ implode(",", old("images", json_decode($product->images))) }}">
            <x-error error-value="images" />
        </div>
        <div class="pb-0 mt-3">
            <ul id="lightgallery" class="list-unstyled row">
                @if(old("images", json_decode($product->images))[0])
                    @foreach(explode(",",  implode(",", old("images", json_decode($product->images)))) as $image)
                        <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                            data-responsive="{{$image}}"
                            data-src="{{$image}}">
                            <a href="javascript:void(0)">
                                <img class="img-responsive br-5" style="height: 200px;" src="{{$image}}" alt="Thumb-1">
                            </a>
                        </li>
                    @endforeach
                @endif
            </ul>
        </div>
    </div>
</div>

<template id="template-gallery">
    <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0">
        <a href="javascript:void(0)">
            <img class="img-responsive br-5" style="height: 200px;" alt="Thumb-1">
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
