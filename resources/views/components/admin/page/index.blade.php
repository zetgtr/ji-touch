<div class="card-header card-header-divider">
    <div>
        <h4>Редактирование страницы</h4>
        <span>Внесите необходимые изменения и сохраните страницу.</span>
    </div>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-6">
            <div class="form-group">
                <label for="title">Название страницы (H1):</label>
                <input type="text" id="title" name="title" value="" class="form-control" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="url">URL (без html):</label>
                <input type="text" name="url" value="" class="form-control">
            </div>
            <div class="form-group">
                <label for="access">Доступ: </label>
                <select name="access" class="form-control form-select">
                    <option value="0" selected="selected">Общий</option>
                    <option value="101">Пользователь</option>
                    <option value="102">Администратор</option>
                    <option value="103">Супер Администратор</option>
                </select>
            </div>
        </div>
        <div class="col-6">
            <div class="form-group">
                <label for="customTitle">Заголовок страницы (Title):</label>
                <input type="text" name="customTitle" value="" class="form-control">
            </div>
            <div class="form-group">
                <label for="customDescription">Описание страницы (Description):</label>
                <input type="text" name="customDescription" value="" class="form-control">
            </div>
            <div class="form-group">
                <label for="customKeywords">Ключевые слова (Keywords):</label>
                <input type="text" name="customKeywords" value="" class="form-control">
            </div>
        </div>
    </div>
</div>
