<div class="adminpanel">
    <a href="{{ route('voyager.login') }}" data-toggle="tooltip" data-delay="1000" data-placement="left" title="Панель администратора">
        <i class="fas fa-cog" aria-hidden="true"></i>
    </a>
    <a href="{{ route('voyager.profile') }}" data-toggle="tooltip" data-delay="1000" data-placement="left" title="Профиль">
        <i class="fas fa-user" aria-hidden="true"></i>
    </a>
    <form action="http://localhost/admin/logout" method="POST">
        @csrf
        <button type="submit" class="btn btn-danger btn-block" data-toggle="tooltip" data-delay="1000" data-placement="left" title="Выход">
            <i class="fas fa-power-off" aria-hidden="true"></i>
        </button>
    </form>

</div>
