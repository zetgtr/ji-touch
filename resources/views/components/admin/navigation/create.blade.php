<form action="{{ route('admin.navigation.store') }}" method="POST">
    @csrf
    <x-warning />
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <label>Название</label>
                <input name="title" class="form-control @error("title") is-invalid @enderror" value="{{ old('title') }}">
                <x-error errorValue="title" />
            </div>
            <div class="form-group">
                <label>Адрес ссылки</label>
                <input name="url" class="form-control @error("url") is-invalid @enderror" value="{{ old('url') }}">
                <x-error errorValue="url" />
            </div>
            <div class="form-group">
                <label>Комментарий</label>
                <input name="comment" class="form-control @error("comment") is-invalid @enderror" value="{{ old('comment') }}">
                <x-error errorValue="comment" />
            </div>

            <input type="submit" value="Сохранить" class="btn btn-success mt-2">
        </div>
    </div>
</form>
