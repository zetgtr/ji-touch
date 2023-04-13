<form action="{{ route('admin.navigation_list.store') }}" method="POST">
    @csrf
    <x-warning />
    <div class="row">
        <div class="form-group col-lg-5">
            <label>Название</label>
            <input name="title" class="form-control @error("title") is-invalid @enderror" value="{{ old('title') }}">
            <x-error errorValue="title" />
        </div>
        <div class="form-group col-lg-5">
            <label>Alias</label>
            <input name="alias" class="form-control @error("alias") is-invalid @enderror" value="{{ old('alias') }}">
            <x-error errorValue="alias" />
        </div>
        <div class="form-group col-lg-2">
            <br>
            <input type="submit" value="Сохранить" class="btn btn-success mt-2">
        </div>
        <div class="col-lg-6">

        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label>Поиск</label>
                <input name="search" class="form-control @error("search") is-invalid @enderror" value="{{ old('search') }}">
                <x-error errorValue="search" />
            </div>
        </div>
    </div>
</form>
