<form method="POST" id="about" action="{{ route('admin.form.unloading.store') }}">
    @csrf
    <input type="hidden" name="id" value="{{ $id }}">
    <div class="mb-3">
        <label class="text-black" for="user">Представитесь</label>
        <input id="user" class="form-control" name="user" type="text" required value="{{ old('user') }}">
    </div>
    <div class="mb-3">
        <label class="text-black" for="phone">Ваш телефон</label>
        <input id="phone" class="form-control" name="phone" type="text" required value="{{ old('phone') }}">
    </div>
    <div class="mb-3">
        <label class="text-black" for="email">Ваш email</label>
        <input id="email" class="form-control" name="email" type="email" required value="{{ old('email') }}">
    </div>
    <div class="mb-3">
        <label class="text-black" for="info">Введите информацию, которую хотите получить</label>
        <textarea id="info" class="form-control" name="info" required type="text">{{ old('info') }}</textarea>
    </div>
</form>
