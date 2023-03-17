<?php

namespace App\Models\Admin\Page;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageCreate extends Model
{
    use HasFactory;

    protected $table = 'page_create';

    protected $fillable = [
        'title','url','custom_title','description','keywords','access'
    ];
}
