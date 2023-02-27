<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if(!Auth::user()->is_admin)
        {
            return redirect()->route('home');
        }
        return $next($request);
    }
}
