<form action="{{ route('admin.navigation_list.update', ['navigation_list'=>$navigation]) }}" method="POST">
    @csrf
    @method('PUT')
    <x-warning />
    <input type="hidden" value="{{ $navigation->id }}" name="id">
    <div class="row">
        <div class="form-group col-lg-5">
            <label>Название</label>
            <input name="title" class="form-control @error("title") is-invalid @enderror" value="{{ old('title') ? old('title') : $navigation->title }}">
            <x-error errorValue="title" />
        </div>
        <div class="form-group col-lg-5">
            <label>Alias</label>
            <input name="alias" class="form-control @error("alias") is-invalid @enderror" value="{{ old('alias') ? old('alias') : $navigation->alias }}">
            <x-error errorValue="alias" />
        </div>
        <div class="form-group col-lg-2">
            <br>
            <input type="submit" value="Сохранить" class="btn btn-success mt-2">
        </div>
    </div>
</form>
