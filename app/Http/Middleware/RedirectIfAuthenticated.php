<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {

            $portal = Auth::user()->portal;

            if($portal == 'AD') {

                return redirect('/admin/dashboard');

            }
            else if($portal == 'COD') {

                return redirect('/cod');

            }
            else if($portal == 'SPD') {

                return redirect('/spd');

            }
            else if($portal == 'VDD') {

                return redirect('/vdd/dashboard');

            }
            else if($portal == 'WRD') {

                return redirect('/wrd/dashboard');

            }
            else {

                return redirect('/');

            }

        }

        return $next($request);
    }
}
