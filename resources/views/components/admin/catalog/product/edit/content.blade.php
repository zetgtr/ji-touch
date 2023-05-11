<div class="tab-pane fade show active" id="content" role="tabpanel" aria-labelledby="content-link">
    <div class="row">
        <div class="col-lg-8">
            <div class="row">
            <div class="form-group">
                <label for="title" >Название</label>
                <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title',$product->title) }}">
                <x-error errorValue="title" />
            </div>
            </div>
            <div class="form-group">
                <label for="description">Описание товара</label>
                <textarea name="content" id="my-editor" class="form-control @error('content') is-invalid @enderror my-editor">{{ old('content',$product->content) }}</textarea>
                <x-error errorValue="content" />
                </div>
        </div>
        <div class=" col-lg-4">
            <div class="row">
                <div class=" col-lg-12">
                    <div class="form-group">
                        <label for="category">Категория</label>
                        <div class="category_edit">
                            @forelse($categories as $category)
                                <input type="checkbox" @foreach($product->categories()->get() as $item) @checked(old('category_id[]', $item->id) === $category->id) @endforeach class="category_checkbox" id="category{{$category->id}}" name="category_id[]" value="{{$category->id}}">
                                <label for="category{{$category->id}}">{{$category->title}}</label>
                            @empty
                                <div class="d-flex w-100 mt-3 justify-content-center">Не созданы</div>
                            @endforelse
                        </div>
                    </div>


                </div>

                <div class="col-lg-6 mt-5">
                    <label for="access">Доступ</label>
                    <select class="form-select" name="access" id="access">
                        @foreach(\App\Enums\AccessEnums::name() as $key=>$access)
                            <option  @selected(old('access',$product->access) == $key)  value="{{$key}}">{{$access}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-lg-6 mt-5">
                    <label for="price">Цена</label>
                    <input type="text" name="price" id="price" class="form-control" value="{{old('price',$product->price)}}">
                </div>
                <div class="col-lg-12 mt-3">
                    <div class="form-check">
                        <input class="form-check-input" @checked(old('new',$product->new )) type="checkbox" value="1" name="new" id="new">
                        <label class="form-check-label" for="new">
                            Новинка
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" @checked(old('hit',$product->hit )) type="checkbox" value="1" name="hit" id="hit">
                        <label class="form-check-label" for="hit">
                            Хит продаж
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<link id="style" href="{{asset('assets/css/admin/catalog.css')}}" rel="stylesheet">
