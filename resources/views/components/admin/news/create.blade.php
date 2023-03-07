    <div class="card-header card-header-divider">
        <div>
            <h4>Создание новости</h4>
            <span class="card-header-subtitle">Заполните необходимые поля и сохраните новость.</span>
        </div>
    </div>
    <x-admin.navigatin-js :links="$links" />
    <div class="card-body">
        <form action="{{ route('admin.news.store') }}" class="tab-content">
            <x-admin.news.content />
            <x-admin.news.seo />
            <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
        </form>
    </div>

