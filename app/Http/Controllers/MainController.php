<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Program;
use App\ServicesApplication;

use Session;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {

        $data = array(
            'title_page' =>  'Practice', 
            'location' => 'Practice'
        );
        
        return view('practice.pages.index')
        ->with(compact('data'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function test() {
        
        return view('test/index');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function testVDDServices() {

        $programs = Program::all();
        
        return view('test/vdd_services')
        ->with('programs', $programs);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function testVDDServicesForm($program_id) {

        $program_id = (int) $program_id;

        $program = Program::where('program_id', $program_id)->first();

        Session::forget('services_department');

        Session::forget('services_program');

        if(!$program) {

            return abort(404);

        }

        Session::put('services_department', 'VDD');

        Session::put('services_program', $program_id);

        return view('test/vdd_services_form')
        ->with('program', $program);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function testServicesFormSubmit(Request $request) {

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
                'program_id' => (int) session('services_program'),
                'department' => sanitize(session('services_department')),
                'first_name' => sanitize($request->first_name),
                'middle_name' => sanitize($request->middle_name),
                'last_name' => sanitize($request->last_name),
                'contact_number' => sanitize($request->contact_number),
                'email' => sanitize($request->email),
                'message' => sanitize($request->message),
            ]);
    
            $store ? [$code = 'SSSA', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];
    
        }
    
        return response()->json([
            'code' => $code,
            'error_count' => $error_count,
            'data' => [
                'message' => $message,
            ]
        ]);
        
    }

}
