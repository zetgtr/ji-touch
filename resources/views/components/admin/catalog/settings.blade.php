<form action="{{ route('admin.catalog.settings.update', ['setting'=>$settings->id]) }}" method="POST" class="row">
    @csrf
    @method('PUT')
    <div class="col-lg-6">
        <div class="form-group">
            <label for="title">Заголовок</label>
            <input type="text" name="title" id="title" class="form-control" value="{{ old('title',$settings->title) }}">
            <x-error errorValue="title" />
        </div>
        <div class="form-group">
            <label for="url">Url</label>
            <input type="text" name="url" id="url" class="form-control" value="{{ old('url',$settings->url) }}">
            <x-error errorValue="url" />
        </div>
        <div class="form-group">
            <label for="description">Описание</label>
            <textarea name="description" id="my-editor" class="form-control @error('description') is-invalid @enderror my-editor">{{ old('description',$settings->description) }}</textarea>
            <x-error errorValue="description" />
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="seo_title">SEO Title</label>
            <input type="text" name="seo_title" id="seo_title" class="form-control" value="{{ old('seo_title',$settings->seo_title) }}">
            <x-error errorValue="seo_title" />
        </div>
        <div class="form-group">
            <label for="seo_keywords">SEO Keywords</label>
            <input type="text" name="seo_keywords" id="seo_keywords" class="form-control @error('seo_keywords') is-invalid @enderror" value="{{ old('seo_keywords',$settings->seo_keywords) }}">
            <x-error errorValue="seo_keywords" />
        </div>
        <div class="form-group">
            <label for="seo_description">SEO Description</label>
            <textarea name="seo_description" id="my-editor" class="form-control @error('seo_description') is-invalid @enderror my-editor">{{ old('seo_description',$settings->seo_description) }}</textarea>
            <x-error errorValue="seo_keywords" />
        </div>
    </div>
    <div class="col-lg-12">
        <input type="submit" value="Сохранить" class="btn btn-sm btn-success">
    </div>
</form>
