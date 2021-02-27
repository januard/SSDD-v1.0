<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use Auth;

class HomeController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {

        $this->middleware('auth');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {

        $portal = Auth::user()->portal;

        if($portal == 'ADMIN') {

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

            abort(404);

        }

    }

    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexAdmin() {
        
        $portal = Auth::user()->portal;

        $title = '';

        $location = '';

        $display = '';

        if($portal == 'ADMIN') {

            $title = 'Dashboard';

            $location = 'Dashboard';

            $display = 'admin.pages.index';

        }
        else {

            return redirect('/home');

        }

        $data = array(
            'title_page' =>  $title, 
            'location' => $location
        );

        return view($display)
        ->with(compact('data'));

    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexCod() {
        
        $portal = Auth::user()->portal;

        $title = '';

        $location = '';

        $display = '';

        if($portal == 'COD') {

            $title = 'Dashboard';

            $location = 'Dashboard';

            $display = 'cod.pages.index';

        }
        else {

            //return redirect('/');
            abort(404);

        }

        $data = array(
            'title_page' =>  $title, 
            'location' => $location
        );

        return view($display)
        ->with(compact('data'));

    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showSpdIndex() {
        
        $portal = Auth::user()->portal;

        $title = '';

        $location = '';

        $display = '';

        if($portal == 'SPD') {

            $title = 'Dashboard';

            $location = 'Dashboard';

            $display = 'spd.pages.index';

        }
        else {

            //return redirect('/');
            abort(404);

        }

        $data = array(
            'title_page' =>  $title, 
            'location' => $location
        );

        return view($display)
        ->with(compact('data'));

    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexVdd() {
        
        $portal = Auth::user()->portal;

        $title = '';

        $location = '';

        $display = '';

        if($portal == 'VDD') {

            $title = 'Dashboard';

            $location = 'Dashboard';

            $display = 'vdd.pages.index';

        }
        else {

            return redirect('/home');

        }

        $data = array(
            'title_page' =>  $title, 
            'location' => $location
        );

        return view($display)
        ->with(compact('data'));

    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showWrdIndex() {
        
        $portal = Auth::user()->portal;

        $title = '';

        $location = '';

        $display = '';

        if($portal == 'WRD') {

            $title = 'Dashboard';

            $location = 'Dashboard';

            $display = 'wrd.pages.index';

        }
        else {

            //return redirect('/');
            abort(404);

        }

        $data = array(
            'title_page' =>  $title, 
            'location' => $location
        );

        return view($display)
        ->with(compact('data'));

    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showPracticeIndex() {
        
        $portal = Auth::user()->portal;

        $title = '';

        $location = '';

        $display = '';

        if($portal == 'Practice') {

            $title = 'Dashboard';

            $location = 'Dashboard';

            $display = 'practice.pages.index';

        }
        else {

            //return redirect('/');
            abort(404);

        }

        $data = array(
            'title_page' =>  $title, 
            'location' => $location
        );

        return view($display)
        ->with(compact('data'));

    }

}
