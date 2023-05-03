<div class="tab-pane fade show active" id="content" role="tabpanel" aria-labelledby="content-link">
    <div class="row">
        <div class="col-lg-8">
            <div class="row">
                <div class="col-lg-8">
                    <div class="form-group">
                        <label for="title" >Название категории</label>
                        <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title') }}">
                        <x-error errorValue="title" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="access">Доступ</label>
                    <select class="form-select" name="access" id="access">
                        @foreach(\App\Enums\AccessEnums::name() as $key=>$access)
                            <option  @selected(old('access') == $key)  value="{{$key}}">{{$access}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="description">Описание категории</label>
                <textarea name="description" id="my-editor" class="form-control @error('description') is-invalid @enderror my-editor">{{ old('description') }}</textarea>
                <x-error errorValue="description" />
                </div>
        </div>
        <div class="col-lg-4">
            <div class="iconed-caption">
                <i class="fas fa-link"></i>
                Родительская категория
            </div>

            @forelse($categories as $category)
                <div class="outlined-radio mt-2">
                    <input id="category{{$category->id}}" @checked(old('parent')) type="radio" class="d-none" value="{{$category->id}}" name="parent">
                    <label class="d-block text-left" for="category{{$category->id}}">{{$category->title}}</label>
                </div>
            @empty
                <div class="d-flex w-100 mt-3 justify-content-center">Не созданы</div>
            @endforelse

            <div class="tree-subchildren">

            </div>

        </div>
    </div>
</div>

<link id="style" href="{{asset('assets/css/admin/catalog.css')}}" rel="stylesheet">
