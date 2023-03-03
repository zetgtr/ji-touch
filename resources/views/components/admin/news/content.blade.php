<div class="tab-pane active" id="content" role="tabpanel">
    <div class="form-grop mb-3">
        <label for="theme">Тема:</label>
        <input id="theme" class="form-control @error('theme') is-invalid @enderror" name="theme" value="{{old('theme')}}" />
        <x-error error-value="theme" />
    </div>
    <div class="form-group mb-3">
        <label for="news" >Новость:</label>
{{--        <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.10.7/tinymce.min.js" integrity="sha512-Ckge7OuE2kEtJHLhA8wnsn3aEImoJpk3k4MAhbGnGVlxYAgx/5uv/MYdPTzuX6/dCwbPriGxylCRhTKcRd0MZQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>--}}
{{--        <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.3.2/tinymce.min.js" integrity="sha512-0hADhKU8eEFSmp3+f9Yh8QmWpr6nTYLpN9Br7k2GTUQOT6reI2kdEOwkOORcaRZ+xW5ZL8W24OpBlsCOCqNaNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>--}}

        <textarea name="news" id="my-editor" class="form-control @error('theme') is-invalid @enderror my-editor">{{ old('news') }}</textarea>
        <x-error error-value="news" />
{{--        <script src="{{asset('assets/js/admin/ckeditor5-build-classic/ckeditor.js')}}"></script>--}}
    </div>
</div>



