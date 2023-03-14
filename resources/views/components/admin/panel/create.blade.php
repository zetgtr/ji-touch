
<link id="style" href="{{ asset('assets/css/admin/panel.css') }}" rel="stylesheet" />

<div class="row">
    <div class="col-lg-6">
        <div class="form-group">
            <label class="ml-3">Имя панели:</label>
            <input type="text" id="title" name="title" class="form-control" value="" placeholder="Введите имя панели">
        </div>
        <div class="form-group">
            <label class="ml-3">Alias:</label>
            <input name="alias" id="alias" class="form-control" oninput=" $('#alias').css('box-shadow', 'none');" type="text" value="" placeholder="Введите alias">
        </div>
        <div class="form-group">
            <div><label class="ml-3">Способ отображения панели:</label></div>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-outline-primary btn-sm clRS active" id="render">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Render
                </label>
                <label class="btn btn-outline-primary btn-sm clRS" id="static">
                    <input type="radio" name="options" id="option2" autocomplete="off"> Static
                </label>
            </div>

        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label class="ml-3">Описание:</label>
            <textarea name="discription" id="discription" class="form-control" rows="4" placeholder="Введите описание"></textarea>
        </div>
    </div>
    <div class="card-header header-panel">Данные панели</div>

        <div class="panel_table">
            <div class="col-2"> </div>
            <div class="table-responsive">
                <table class="table" style="position: relative;">
                    <tbody onselectstart="return false">
                    <tr>
                        <th style="width: 140px;">Alias</th>
                        <th>
                            <div style="display: flex; min-width: 150px;">
                                <input oninput="name_col_change(this);" class="form-control" style="background: white;" type="text" value="" placeholder="Название столбца"><button type="button" class="open_menu" onclick="all_menu(this);"></button>
                                <div class="menu_table"><button onclick="key_col(this);" class="key"></button><button onclick="left_col(this);" class="left"></button><button onclick="right_col(this);" class="right"></button><button class="delete_R" onclick="delete_col(this);"></button></div>
                            </div>
                        </th>
                        <th rowspan="4" style="width: 18px; background: #28a745; color: white; text-align: center; vertical-align: middle; cursor: pointer; background-image: url('/infusions/panel_editor/images/simple-dashed.png'); padding: 0px;" onclick="add_col(this)">+</th>
                    </tr>
                    <tr>
                        <th>Тип данных</th>
                        <th>
                            <select class="form-control form-select" style="background: white;" oninput=" change_type(this); ">
                                <option selected="" value="text">text</option>
                                <option value="textarea">textarea</option>
                                <option value="img">img</option>
                                <option value="array">array</option>
                                <option value="php">php</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div style="    display: flex; justify-content: space-between;"><button style="color: white; border: none; width: 36px; height: 36px; background: #4285f4; cursor: pointer;" type="button" onmousedown="transfer_row(this);"><i class="fas fa-expand-arrows-alt"></i></button><button type="button" style="border: none; height: 36px; width: 36px; color: white; background: #4285f4; cursor: pointer;" onclick="select_mask(this)"><i class="far fa-clone"></i></button><button type="button" style="border: none; height: 36px; width: 36px; color: white; background: #ea3f30; cursor: pointer;" onclick="delete_row(this)"><i class="fas fa-trash-alt"></i></button></div>
                        </th>
                        <th><input class="form-control" oninput="text_change(this)" type="text" value=""></th>
                    </tr>
                    <tr>
                        <th colspan="2" style="background: #4285f4; padding: 5px; cursor: pointer; color: white ; text-align: center;  background-image: url('/infusions/panel_editor/images/simple-dashed.png'); padding: 0px;" onclick="add_row(this)">+</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tina" style="display: none;">
            <textarea name="description" id="my-editor" class="moxiemanager my-editor"></textarea>
            <div onclick="save_texarea()" class="btn btn-outline-primary btn-sm my-3">Назад</div>
        </div>
    <div class="col-12">
        <button type="button" onclick="send_all(true);" class="btn btn-sm btn btn-outline-primary">Сохранить и выйти</button>
        <button style="width: 100px; margin-left: 50px;" type="button" onclick="send_all(false);" class="btn btn-sm btn-outline-success">Сохранить</button>
        <a style="width: 80px;" href="index.php?aid=874e8de2cc069887" class="btn btn-sm btn-outline-danger redir">Отмена</a>
        <div class="detached">
            <input type="checkbox" name="detached" id="detached">
            <label class="btn btn-sm btn btn-outline-info" for="detached" value="1">Сервисная панель</label>
        </div>
    </div>
</div>

<input type="hidden" id="form_url" value="{{ route('admin.panel.store') }}">
<input type="hidden" name="_method" id="method" value="POST">
@vite('resources/sass/admin/panel.scss')
<script> $ar=`eyJoZWFkZXIiOlsiIl0sInR5cGUiOlsidGV4dCJdLCJkYXRhIjpbWyIiXV19`; id = 'none';</script>
<script type='text/javascript' src='{{ asset('assets/js/admin/panel/panel_editor.js') }}'></script>
