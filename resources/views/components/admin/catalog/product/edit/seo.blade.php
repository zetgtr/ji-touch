<div class="tab-pane fade" id="seo" aria-labelledby="seo-link">
    <div class="row">
        <div class="col-lg-8">
            <div class="form-group">
                <label for="url">Seo Url</label>
                <input id="url" name="url" class="form-control @error('url') is-invalid @enderror" type="text" value="{{old('url',$product->url)}}" placeholder="Seo Url">
                <x-error errorValue="url" />
            </div>
            <div class="form-group">
                <label for="seoTitle">Seo Title</label>
                <input id="seoTitle" name="seo_title" class="form-control @error('seo_title') is-invalid @enderror" type="text" value="{{old('seo_title',$product->seo_title)}}" placeholder="Seo Title">
                <x-error errorValue="seo_title" />
            </div>
            <div class="form-group">
                <label for="seoDescription">Seo Description</label>
                <textarea name="seo_description" id="seoDescription" class="form-control @error('seo_description') is-invalid @enderror">{{ old('seo_description',$product->seo_description) }}</textarea>
                <x-error errorValue="seo_description" />
            </div>
            <div class="form-group">
                <label for="seoKeywords">Seo Keywords</label>
                <input id="seoKeywords" name="seo_keywords" class="form-control @error('seo_keywords') is-invalid @enderror" type="text" value="{{old('seo_keywords',$product->seo_keywords)}}" placeholder="Seo Keywords">
                <x-error errorValue="seo_keywords" />
            </div>
        </div>
    </div>
</div>
