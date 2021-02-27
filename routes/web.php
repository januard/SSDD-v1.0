<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/components', function () {
    return view('components');
});

Auth::routes();

// JASON

Route::get('/test', 'MainController@test');

Route::get('/test/vdd_services', 'MainController@testVDDServices');

Route::get('/test/vdd_services/services_form/{program_id}', 'MainController@testVDDServicesForm');

Route::post('/test/services/services_form/submit', 'MainController@testServicesFormSubmit');


Route::get('/practice/{path}', 'MainController@index')->where('path', '.*');

Route::get('/admin/{path}', 'HomeController@indexAdmin')->where('path', '^(?!login).*$');

Route::get('/admin/login', 'Auth\Admin\AdminLoginController@showLoginForm')->name('admin.login');

Route::post('/admin/logout', 'Auth\LoginController@logout');

Route::get('/vdd/{path}', 'HomeController@indexVdd')->where('path', '^(?!logout).*$');

Route::post('/vdd/logout', 'Auth\LoginController@logout');

Route::get('/spd/{path}', 'HomeController@indexSpd')->where('path', '.*');



// JOSEPH

Route::get('/cod/{path?}', 'HomeController@indexCod');
Route::get('/qc.cod/{path?}',function(){
    return view('cod.pages.frontpage');
})->where('path', '.*');

// PAUL

Route::get('/wrd', 'HomeController@showWrdIndex');
Route::get('/quezoncity.wrd',function(){
    return view('wrd.pages.website');
});


// OTHERS

Route::get('/home', 'HomeController@index')->name('home');