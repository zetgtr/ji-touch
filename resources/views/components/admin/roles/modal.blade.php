{{--<div>--}}
{{--    <form action="{{ route('admin.roles.store') }}" method="post" class="row">--}}
{{--        @csrf--}}
{{--        <div class="col-lg-12">--}}
{{--            <div class="form-group">--}}
{{--                <label for="roles_name">{{__("Roles")}}</label>--}}
{{--                <input name="name" type="text" class="form-control @error('name') is-invalid @enderror" value="{{old('name')}}">--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <button class="btn btn-primary mt-3">{{__("Save")}}</button>--}}
{{--    </form>--}}
{{--</div>--}}

<div class="table-responsive">
    <table id="example2" class="table table-bordered text-nowrap border-bottom">
        <thead>
            <th>Название меню</th>
            <th>Чтение</th>
        </thead>
        <tbody>
        @foreach($menus as $menu)
            <tr class="delete-element">
                <td>{{ $menu->name }}</td>
                <td class="btn-list-table">
{{--                    @if($menu->publish)--}}
                        <a href="" class="btn btn-success show-publish">
                            <i class="far fa-eye"></i>
                        </a>
{{--                    @else--}}
                        <a href="" class="btn btn-default show-publish">
                            <i class="far fa-eye-slash"></i>
                        </a>
{{--                    @endif--}}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>

<script src="{{ asset('assets/js/admin/modal.js') }}" ></script>
