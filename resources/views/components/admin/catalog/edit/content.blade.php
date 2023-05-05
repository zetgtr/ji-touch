<div class="tab-pane fade show active" id="content" role="tabpanel" aria-labelledby="content-link">
    <div class="row">
        <div class="col-lg-8">
            <div class="row">
                <div class="col-lg-8">
                    <div class="form-group">
                        <label for="title" >Название категории</label>
                        <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title', $category->title) }}">
                        <x-error errorValue="title" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="access">Доступ</label>
                    <select class="form-select" name="access" id="access">
                        @foreach(\App\Enums\AccessEnums::name() as $key=>$access)
                            <option @selected(old('access', $category->access) == $key) value="{{$key}}">{{$access}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="description">Описание категории</label>
                <textarea name="description" id="my-editor" class="form-control @error('description') is-invalid @enderror my-editor">{{ old('description', $category->description) }}</textarea>
                <x-error errorValue="description" />
                </div>
        </div>
        <div class="col-lg-4">
            <div class="iconed-caption">
                <i class="fas fa-link"></i>
                Родительская категория
            </div>

            <div class="outlined-radio mt-2">
                <input type="radio" name="parent" id="category0" class="d-none" @checked(!old('parent', $category->parent))>
                <label class="d-block text-left" for="category0">Корневая директория</label>
            </div>
            @forelse($categories as $item)
                @if($category->id !== $item->id)
                    <div class="outlined-radio mt-2">
                        <input id="category{{$item->id}}" @checked(old('parent', $category->parent) === $item->id) type="radio" class="d-none" value="{{$item->id}}" name="parent">
                        <label class="d-block text-left" for="category{{$item->id}}">{{$item->title}}</label>
                    </div>
                @endif
            @empty
                <div class="d-flex w-100 mt-3 justify-content-center">Не созданы</div>
            @endforelse
        </div>
    </div>
</div>

<link id="style" href="{{asset('assets/css/admin/catalog.css')}}" rel="stylesheet">