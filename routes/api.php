<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// JASON

Route::get('/practice/category/show_categories', 'CategoryController@showCategories');

Route::post('/practice/category/store', 'CategoryController@storeCategory');

Route::delete('/practice/category/delete/{id}', 'CategoryController@destroyCategory');

Route::prefix('admin')->group(function() {

    Route::prefix('system')->group(function() {

        Route::prefix('users')->group(function() {

            Route::get('/show_users', 'AdminController@showUsers');

            Route::get('/show_user_details/{id}', 'AdminController@showUserDetails');

            Route::get('/destroy_user', 'AdminController@destroyUser');

            Route::post('/store_user', 'AdminController@storeUser');

            Route::post('/update_user', 'AdminController@updateUser');

        });

        Route::prefix('roles')->group(function() {

            Route::get('/show_roles', 'AdminController@showRoles');

            Route::get('/destroy_role', 'AdminController@destroyRole');

            Route::post('/store_role', 'AdminController@storeRole');

        });

    });

    Route::prefix('audit_trail')->group(function() {

        Route::prefix('user_log')->group(function() {

            Route::get('/show_user_log', 'AdminController@showUserLog');

            Route::post('/store_user_log', 'AdminController@storeUserLog');

        });

        Route::prefix('activity_log')->group(function() {

            Route::get('/show_activity_log', 'AdminController@showActivityLog');

            Route::post('/store_activity_log', 'AdminController@storeActivityLog');

        });

        Route::prefix('system_log')->group(function() {

            Route::get('/show_system_log', 'AdminController@showSystemLog');

            Route::post('/store_system_log', 'AdminController@storeSystemLog');

        });

    });

});

Route::prefix('vdd')->group(function() {

    Route::prefix('dashboard')->group(function() {

        Route::get('/show_dashboard', 'VDDController@showDashboard');

    });

    Route::prefix('program')->group(function() {

        Route::get('/show_programs', 'VDDController@showPrograms');

        Route::post('/store_program', 'VDDController@storeProgram');

        Route::get('/edit_program/{id}', 'VDDController@editProgram');

        Route::post('/update_program', 'VDDController@updateProgram');

        Route::get('/destroy_program', 'VDDController@destroyProgram');

    });

    Route::prefix('services_application')->group(function() {

        Route::get('/show_services_applications', 'VDDController@showServicesApplications');

        Route::post('/store_services_application', 'VDDController@storeServicesApplication');

        Route::post('/update_services_application', 'VDDController@updateServicesApplication');

    });

    Route::prefix('training')->group(function() {

        Route::prefix('schedule')->group(function() {

            Route::get('/show_schedule', 'VDDController@showSchedule');

        });

        Route::prefix('certification')->group(function() {

            Route::get('/show_certificates', 'VDDController@showCertificates');

            Route::post('/store_certificate', 'VDDController@storeCertificate');

            Route::get('/edit_certificate/{id}', 'VDDController@editCertificate');

            Route::post('/update_certificate', 'VDDController@updateCertificate');

            Route::get('/destroy_certificate', 'VDDController@destroyCertificate');

        });

    });

    Route::prefix('appointment')->group(function() {
    
        Route::get('/show_appointment', 'VDDController@showAppointments');

        Route::post('/show_appointments_calendar', 'VDDController@showAppointmentsCalendar');

        Route::post('/store_appointment', 'VDDController@storeAppointment');

    });

    Route::prefix('assistance')->group(function() {

        Route::get('/show_assistance', 'VDDController@showAssistance');

        Route::post('/store_assistance', 'VDDController@storeAssistance');

        Route::get('/edit_assistance/{id}', 'VDDController@editAssistance');

        Route::post('/update_assistance', 'VDDController@updateAssistance');

        Route::get('/destroy_assistance', 'VDDController@destroyAssistance');

    });

    Route::prefix('referral')->group(function() {

        Route::get('/show_referrals', 'VDDController@showReferrals');

        Route::post('/store_referral', 'VDDController@storeReferral');

        Route::get('/edit_referral/{id}', 'VDDController@editReferral');

        Route::post('/update_referral', 'VDDController@updateReferral');

        Route::get('/destroy_referral', 'VDDController@destroyReferral');

    });

});

// JOSEPH

Route::get('/evaluation','cod\CodController@checklistEvalution');
Route::get('/usericon','cod\CodController@userIcon');
Route::get('/setcookie','cod\CodController@setCookie');
// PAUL

