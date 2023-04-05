<form action="{{ route('admin.packages_settings.update', ['packages_setting' => 1]) }}" method="post" class="row">
    @csrf
    @method('PUT')
    <x-warning />
    <div class="col-lg-6">
        <div class="form-group">
            <label for="user">Пользователь</label>
            <input type="text" name="user" class="form-control @error('user') is-invalid @enderror" value="{{ $settings->user }}">
            <x-error errorValue="user" />
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="url">Url</label>
            <input type="text" name="url" class="form-control @error('url') is-invalid @enderror" value="{{ $settings->url }}">
            <x-error errorValue="url" />
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="php">Путь к исполняемому файлу PHP</label>
            <input type="text" name="php" class="form-control @error('php') is-invalid @enderror" value="{{ $settings->php }}">
            <x-error errorValue="php" />
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="composer">Путь к исполняемому файлу composer</label>
            <input type="text" name="composer" class="form-control @error('composer') is-invalid @enderror" value="{{ $settings->composer }}">
            <x-error errorValue="composer" />
        </div>
    </div>
    <div>
        <input type="submit" class="btn btn-xs btn-success" value="Сохранить">
    </div>
</form>
