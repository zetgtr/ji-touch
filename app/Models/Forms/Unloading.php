<?php

declare(strict_types=1);

namespace App\Models\Forms;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unloading extends Model
{
    use HasFactory;

//    protected $table = 'unloadings';
    protected $fillable = [
        'user',
        'phone',
        'email',
        'info',
    ];
}
