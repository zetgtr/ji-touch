
<tr>
    <td class="text-nowrap align-middle">{{ $role->name }}</td>
    <td class="text-nowrap align-middle"><span>{{ $role->created_at }}</span></td>

    <td class="text-center align-middle">
        <div class="btn-group align-top">
            <a href="{{ route('admin.roles.edit', ['role'=>$role]) }}" class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Редактировать</a>
            <a href="{{ route('admin.roles.destroy',['role'=>$role]) }}" class="btn btn-sm btn-primary delete badge" type="button"><i class="fa fa-trash"></i></a>
        </div>
    </td>
</tr>
<script src="{{asset('assets/js/admin/delete.js')}}" ></script>



