<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Appointment;
use App\Assistance;
use App\Certification;
use App\Program;
use App\Referral;
use App\ServicesApplication;

use Auth;
use Carbon\Carbon;
use DB;

class VDDController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {

        $this->middleware('auth:api');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeProgram(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'program' => ['required', 'string', 'max:500'],
            'code' => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string', 'max:10000'],
        ]);

        $code = '';

        $error_count = 0;

        $message = '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';

        if($error_count == 0) {

            Auth::user()->account_type != 1 ? [$code = 'ESA', $error_count++, $message = getDefaultMessage($code)] : true;

            if($error_count == 0) {

                $store = Program::create([
                    'program' => sanitize($request->program),
                    'code' => sanitize($request->code),
                    'description' => sanitize($request->description),
                    'created_by' => Auth::user()->id,
                ]);

                $store ? [$code = 'SCNP', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

            }

        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeServicesApplication(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'contact_number' => ['required', 'max:20'],
            'email' => ['required', 'max:100'],
            'message' => ['required', 'max:10000'],
        ]);
    
        $code = '';
    
        $error_count = 0;
    
        $message = '';
    
        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';
    
        if($error_count == 0) {
    
            $store = ServicesApplication::create([
                'program_id' => (int) $request->program,
                'department' => 'VDD',
                'first_name' => sanitize($request->first_name),
                'middle_name' => sanitize($request->middle_name),
                'last_name' => sanitize($request->last_name),
                'contact_number' => sanitize($request->contact_number),
                'email' => sanitize($request->email),
                'message' => sanitize($request->message),
            ]);
    
            $store ? [$code = 'SCNSA', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];
    
        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeAppointment(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'appointment' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string', 'max:10000'],
        ]);

        $code = '';

        $error_count = 0;

        $message = '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';

        if($error_count == 0) {

            //Auth::user()->account_type != 1 ? [$code = 'ESA', $error_count++, $message = getDefaultMessage($code)] : true;

            if($error_count == 0) {

                $store = Appointment::create([
                    'appointment' => sanitize($request->appointment),
                    'description' => sanitize($request->description),
                    'start_date' => sanitize($request->start_date),
                    'end_date' => sanitize($request->end_date),
                    'time' => sanitize($request->time),
                    'source' => 'Internal',
                    'event_color' => 'red',
                    'notification' => '0000-00-00 00:00:00',
                    'created_by' => Auth::user()->id,
                ]);

                $store ? [$code = 'SCNA', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

            }

        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCertificate(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'program' => ['required'],
            'certificate_template' => ['required', 'string', 'max:100'],
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'date_of_certification' => ['required', 'max:100'],
            'other_1' => ['required', 'max:500'],
            'other_2' => ['required', 'max:500'],
        ]);

        $code = '';

        $error_count = 0;

        $message = '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';

        if($error_count == 0) {

            $store = Certification::create([
                'program' => (int) $request->program,
                'first_name' => sanitize($request->first_name),
                'middle_name' => sanitize($request->middle_name),
                'last_name' => sanitize($request->last_name),
                'date_of_certification' => sanitize($request->date_of_certification),
                'description' => sanitize($request->description),
                'other_1' => sanitize($request->other_1),
                'other_2' => sanitize($request->other_2),
                'created_by' => Auth::user()->id,
            ]);

            $store ? [$code = 'SCNC', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeAssistance(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'program' => ['required'],
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'contact_number' => ['required', 'max:100'],
            'email' => ['required', 'max:100'],
            'attachment' => ['required'],
        ]);

        $code = '';

        $error_count = 0;

        $message = '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';

        if($error_count == 0) {

            if($request->file('attachment')) {

                $allowed_extentions = array(
                    "pdf", 
                    "doc", 
                    "docx"
                );

                $first_name = preg_replace("/[^a-zA-Z]+/", "", sanitize($request->input('first_name')));

                $middle_name = preg_replace("/[^a-zA-Z]+/", "", sanitize($request->input('middle_name')));

                $last_name = preg_replace("/[^a-zA-Z]+/", "", sanitize($request->input('last_name')));

                $client_name = strtolower($first_name .'_'. $middle_name .'_'. $last_name);

                $extension = $request->file('attachment')->getClientOriginalExtension();

                if(in_array($extension, $allowed_extentions)) {

                    $file_with_extention = $request->file('attachment')->getClientOriginalName();

                    $document = pathinfo($file_with_extention, PATHINFO_FILENAME);

                    $document_to_store = time() .'_files_'. $client_name .'.'. $extension;

                    $document_path = $request->file('attachment')->storeAs('public/'. $extension .'/assistance/files/'. $client_name, $document_to_store);

                    $document_to_store_with_path = '/storage/'. $extension .'/assistance/files/'. $client_name .'/'. $document_to_store;

                    $store = Assistance::create([
                        'program' => (int) $request->program,
                        'first_name' => $first_name,
                        'middle_name' => $middle_name,
                        'last_name' => $last_name,
                        'contact_number' => sanitize($request->contact_number),
                        'email' => sanitize($request->email),
                        'attachment' => $document_path,
                        'date_start' => sanitize($request->date_start),
                        'date_end' => sanitize($request->date_end),
                        'created_by' => Auth::user()->id,
                    ]);
        
                    $store ? [$code = 'SCNAR', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

                }

            }

        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeReferral(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'contact_number' => ['required', 'max:100'],
            'email' => ['required', 'max:100'],
            'cv' => ['required'],
            'referred_by' => ['required', 'max:250'],
        ]);

        $code = '';

        $error_count = 0;

        $message = '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';

        if($error_count == 0) {

            if($request->file('cv')) {

                $allowed_extentions = array(
                    "pdf", 
                    "doc", 
                    "docx"
                );

                $first_name = preg_replace("/[^a-zA-Z]+/", "", sanitize($request->input('first_name')));

                $middle_name = preg_replace("/[^a-zA-Z]+/", "", sanitize($request->input('middle_name')));

                $last_name = preg_replace("/[^a-zA-Z]+/", "", sanitize($request->input('last_name')));

                $client_name = strtolower($first_name .'_'. $middle_name .'_'. $last_name);

                $extension = $request->file('cv')->getClientOriginalExtension();

                if(in_array($extension, $allowed_extentions)) {

                    $file_with_extention = $request->file('cv')->getClientOriginalName();

                    $document = pathinfo($file_with_extention, PATHINFO_FILENAME);

                    $document_to_store = time() .'_cv_'. $client_name .'.'. $extension;

                    $document_path = $request->file('cv')->storeAs('public/'. $extension .'/referral/cv/'. $client_name, $document_to_store);

                    $document_to_store_with_path = '/storage/'. $extension .'/referral/cv/'. $client_name .'/'. $document_to_store;

                    $store = Referral::create([
                        'referred_by' => sanitize($request->referred_by),
                        'first_name' => $first_name,
                        'middle_name' => $middle_name,
                        'last_name' => $last_name,
                        'contact_number' => sanitize($request->contact_number),
                        'email' => sanitize($request->email),
                        'cv' => $document_path,
                        'created_by' => Auth::user()->id,
                    ]);
        
                    $store ? [$code = 'SCNR', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

                }

            }

        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showDashboard(Request $request) {

        $appointments = Appointment::all();

        $assistances = Assistance::all();

        $certificates = Certification::all();

        $referrals = Referral::all();

        $programs = Program::all();

        $services_applications = DB::table('services_applications')
        ->join('programs', 'programs.program_id', 'services_applications.program_id')
        ->select('programs.*', 'services_applications.*')
        ->get();
        
        return response()->json([
            'data' => [
                'appointments' => $appointments, 
                'assistances' => $assistances, 
                'certificates' => $certificates, 
                'programs' => $programs, 
                'referrals' => $referrals, 
                'services_applications' => $services_applications, 
            ]
        ]);
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showPrograms(Request $request) {

        $programs = Program::paginate(10);
        
        return $programs;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showServicesApplications(Request $request) {

        $services_applications = DB::table('services_applications')
        ->join('programs', 'programs.program_id', 'services_applications.program_id')
        ->select('programs.*', 'services_applications.*', DB::raw('CONCAT(services_applications.last_name, ", ", services_applications.first_name, " ", services_applications.middle_name) AS name'))
        ->paginate(10);

        if($request->status) {

            $status = sanitize($request->status);

            $services_applications = DB::table('services_applications')
            ->join('programs', 'programs.program_id', 'services_applications.program_id')
            ->where('services_applications.status', $status)
            ->select('programs.*', 'services_applications.*', DB::raw('CONCAT(services_applications.last_name, ", ", services_applications.first_name, " ", services_applications.middle_name) AS name'))
            ->paginate(10);

        }
        
        return $services_applications;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showAppointments(Request $request) {

        $appointments = Appointment::pagination(10);

        return $appointments;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showAppointmentsCalendar(Request $request) {

        $appointments = Appointment::select('*')
        ->whereMonth('created_at', Carbon::now()->month)
        ->get();

        $events = array();

        foreach($appointments as $appointment) {

            $date_created = date('Y-m-d', strtotime($appointment['created_at']));

            $events[] = array(
                'title' => $appointment['appointment'],
                'start' => $date_created,
            );

        }

        return response()->json($events);
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showSchedule(Request $request) {

        $schedules = null;
        
        return $schedules;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showCertificates(Request $request) {

        $certifications = Certification::paginate(10);
        
        return $certifications;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showAssistance(Request $request) {

        $assistances = Assistance::paginate(10);
        
        return $assistances;
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showReferrals(Request $request) {

        $referrals = Referral::paginate(10);
        
        return $referrals;
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    public function editProgram($id) {

        $program = Program::find($id);

        $code = '';

        $error_count = 0;

        $title = '';

        $message = '';

        Auth::user()->portal != 'VDD' && Auth::user()->account_type != 1 ? [$code = 'ESA', $message = getDefaultMessage($code), $error_count++] : '';

        if($error_count == 0) {

            !$program ? [$code = 'ESNF', $message = getDefaultMessage($code), $error_count++] : '';

        }

        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message, 
                'program' => $program, 
            ]
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateProgram(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'program' => ['required', 'string', 'max:500'],
            'code' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string', 'max:1000'],
        ]);
        
        $error_count = 0;

        $title = '';

        $message = '';

        Auth::user()->portal != 'VDD' && Auth::user()->account_type != 1 ? [$code = 'ESA', $message = getDefaultMessage($code), $error_count++] : '';

        !$request->input('program_id') ? [$message = 'Something wen\'t wrong. Please Contact the Administrator. ', $error_count++] : '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error++] : '';

        if($error_count == 0) {

            $program_id = (int) sanitize($request->input('program_id'));
            $program = sanitize($request->input('program'));
            $code = sanitize($request->input('code'));
            $description = sanitize($request->input('description'));

            $update = Program::where('program_id', $program_id)
            ->update([
                'program' => $program, 
                'code' => $code, 
                'description' => $description, 
            ]);
            
            $update ? [$code = 'SUPD', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];
        
        }

        return response()->json([
            'error_count' => $error_count,
            'data' => [
                'title' => $title,
                'message' => $message,
            ]
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateServicesApplication(Request $request) {
        
        $error_count = 0;

        $title = '';

        $message = '';

        //Auth::user()->portal != 'VDD' && Auth::user()->account_type != 1 ? [$code = 'ESA', $message = getDefaultMessage($code), $error_count++] : '';

        !$request->input('services_application_id') ? [$message = 'Something wen\'t wrong. Please Contact the Administrator. ', $error_count++] : '';

        $status = 0;

        if($error_count == 0) {

            $services_application_id = (int) sanitize($request->input('services_application_id'));

            $status = (int) sanitize($request->status);

            $update = ServicesApplication::where('services_application_id', $services_application_id)
            ->update([
                'remarks' => sanitize($request->remarks), 
                'status' => $status, 
            ]);

            $update ? (
                $status == 2 ? 
                    [$code = 'SUSRATA', $message = getDefaultMessage($code)] : (
                        $status == 3 ? 
                            [$code = 'SDTAR', $message = getDefaultMessage($code)] : ''
                    ) 
                ) :     
                [$code = 'ESU', $message = getDefaultMessage($code)];
            ;
        
        }

        if($status == 2) {

            $services_application_id = sanitize($request->input('services_application_id'));

            $services_application = DB::table('services_applications')
            ->join('programs', 'programs.program_id', 'services_applications.program_id')
            ->select('programs.*', 'services_applications.*', DB::raw('CONCAT(services_applications.last_name, ", ", services_applications.first_name, " ", services_applications.middle_name) AS name'))
            ->where('services_application_id', $services_application_id)
            ->first();

            $services_application = $services_application->first_name .' '. $services_application->last_name .', '. $services_application->program;

            return response()->json([
                'error_count' => $error_count,
                'data' => [
                    'title' => $title,
                    'message' => $message,
                    'status' => 1,
                    'services_application_id' => $services_application_id,
                    'services_application' => $services_application,
                ]
            ]);

        }

        return response()->json([
            'error_count' => $error_count,
            'data' => [
                'title' => $title,
                'message' => $message,
                'status' => $status,
            ]
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }

}
