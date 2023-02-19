<?php

use App\Http\Controllers\Admin\IndexController as AdminController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::group(['prefix'=>"admin", 'as'=>'admin.', 'middleware' => 'is_admin'],static function(){
        Route::get("/", AdminController::class)
            ->name('index');
    });
});

Route::group(['middleware' => 'guest'], function (){
    Route::get('/auth/redirect/{driver}', [SocialController::class, 'redirect'])
        ->where('driver','\w+')
        ->name('social.auth.redirect');
    Route::get('/auth/callback/{driver}', [SocialController::class, 'callback'])
        ->where('driver','\w+');
});
