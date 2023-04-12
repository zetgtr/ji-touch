<?php

namespace App\Models\Admin\Navigation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NavigationList extends Model
{
    use HasFactory;
    protected $table = "navigations_list";
    protected $fillable = ['title','alias'];
}
