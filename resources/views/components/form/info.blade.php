<form method="POST" id="about" action="{{ route('admin.form.feedback.store') }}">
    @csrf
    <div class="mb-3">
        <label class="text-black" for="user">Представтесь</label>
        <input id="user" class="form-control" name="user" type="text" value="{{ old('user') }}">
    </div>
    <div class="mb-3">
        <label class="text-black" for="comment">Введите ваш отзыв по работе проекта</label>
        <textarea id="comment" class="form-control" name="comment" type="text">{{ old('comment') }}</textarea>
    </div>
</form>
