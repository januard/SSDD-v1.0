<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Roles;

use Auth;
use Hash;
use Str;

class AdminController extends Controller {

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
    public function storeUser(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'role' => ['required', 'string', 'max:40'],
            'portal' => ['required', 'string', 'max:40'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'confirm_password' => ['required', 'required_with:confirm_password', 'same:password'],
        ]);

        $code = '';

        $error_count = 0;

        $message = '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error_count++, $code = 'E01'] : '';

        if($error_count == 0) {

            $store = User::create([
                'first_name' => sanitize($request->first_name),
                'middle_name' => sanitize($request->middle_name),
                'last_name' => sanitize($request->last_name),
                'account_type' => sanitize($request->role),
                'portal' => sanitize($request->portal),
                'email' => sanitize($request->email),
                'password' => Hash::make(sanitize($request->password)),
                'api_token' => Str::random(60),
            ]);

            $store ? [$code = 'SCNSU', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

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
    public function showUsers(Request $request) {

        $users = User::paginate(10);
        
        return $users;
        
    }

    /**
     * Display a listing of the resource.
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showUserDetails($id) {

        $user = User::find($id);

        return response()->json([
            'data' => [
                'user' => $user,
            ]
        ]);
        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRoles(Request $request) {

        $roles = Roles::paginate(10);
        
        return $roles;
        
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
     * @return \Illuminate\Http\Response
     */
    public function updateUser(Request $request) {
        
        $validator = \Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'role' => ['required', 'string', 'max:40'],
            'portal' => ['required', 'string', 'max:40'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);
        
        $error = 0;

        $title = '';

        $message = '';

        Auth::user()->portal != 'ADMIN' ? [$message = 'Unauthorized. ', $error++] : '';

        $validator->fails() ? [$message = implode (" ", $validator->errors()->all()), $error++] : '';

        if($error == 0) {

            $id = (int) sanitize($request->input('user_id'));
            $first_name = sanitize($request->input('first_name'));
            $middle_name = sanitize($request->input('middle_name'));
            $last_name = sanitize($request->input('last_name'));
            $role = (int) $request->input('role');
            $portal = sanitize($request->input('portal'));
            $email = sanitize($request->input('email'));

            $update = User::where('id', $id)
            ->update([
                'first_name' => $first_name, 
                'middle_name' => $middle_name, 
                'last_name' => $last_name, 
                'account_type' => $role, 
                'portal' => $portal, 
                'email' => $email
            ]);
            
            $update ? [$code = 'SUSUD', $message = getDefaultMessage($code)] : [$code = 'ESU', $message = getDefaultMessage($code)];

        }

        return response()->json([
            'error' => $error,
            'data' => [
                'title' => $title,
                'message' => $message,
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
