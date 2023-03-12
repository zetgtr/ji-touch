<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Admin\Menu;
use App\Models\Admin\Roles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @return HasOne
     */
    public function role(): HasOne
    {
        return $this->hasOne(Roles::class, 'id', 'roles_id');
    }

    private function menus()
    {
        return $this->belongsToMany(Menu::class, 'roles_has_menus', 'role_id', 'menu_id')->withPivot('show');
    }

    public function hasMenu($menuId)
    {
        $menus = $this->menus()->where('menu_id', $menuId)->get();

        foreach ($menus as $menu) {
            if ($menu->pivot->show ) {
                return true;
            }
        }

        if ($this->roles_id == 1){
            return true;
        }

        return false;
    }
}
