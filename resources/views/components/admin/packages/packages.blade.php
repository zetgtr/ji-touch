<link href="{{ asset('assets/css/admin/loader.css') }}" rel="stylesheet">
<div class="row">
    <x-warning />
    <form action="{{ route('admin.packages.destroy', ['package' => 1]) }}" method="post" class="col-lg-7">
        @csrf
        @method('DELETE')
        <label for="packages" class="form-label">Установленные пакеты</label>
        <select name="packages" multiple class="form-control" id="packages" >
            @foreach($packages as $key=>$package)
                @foreach($packagesInstall as $install)
                    @if($install->id_package == $key)
                        <option data-url="{{ route('admin.packages.show',['package'=>$key]) }}" data-edit="{{ route('admin.packages.edit',['package'=>$key]) }}" value="{{$key}}">{{$package['name']}}</option>
                    @endif
                @endforeach
            @endforeach
        </select>
        <input type="submit" class="btn btn-danger mt-3" value="Удалить">
    </form>
    <div class="col-lg-5">
        <form action="{{ route('admin.packages.set') }}" id="form-install" method="post">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="packages_install" class="form-label">Установить пакет</label>
                <select name="packages_install" id="packages_install" class="form-select">
                    <option value="0">-- Выберете --</option>
                    @foreach($packages as $key=>$package)
                        <option data-url="{{ route('admin.packages.show',['package'=>$key]) }}" data-edit="{{ route('admin.packages.edit',['package'=>$key]) }}" value="{{$key}}">{{$package['name']}}</option>
                    @endforeach
                </select>
            </div>
            <div type="button" class="btn btn-success modal-effect install-packages" data-url="/admin/packages/" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Установить</div>
            <div type="button" class="btn btn-info add-packages modal-effect" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Добавить</div>
            <div type="button" class="btn btn-default edit-packages modal-effect" data-url="/admin/packages/" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Редактировать</div>
        </form>
    </div>
</div>
<script src="{{ asset('assets/js/admin/packages/add-edit.js') }}"></script>
<x-admin.modal title="" />
<x-admin.packages.add-pacages />
