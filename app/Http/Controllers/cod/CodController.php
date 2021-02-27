<?php

namespace App\Http\Controllers\cod; 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage; 
class CodController extends Controller
{
    public function checklistEvalution(){
        return Storage::download('public/evaluationChecklist.pdf'); 
    }
    public function userIcon(){
        return Storage::get('public/user.png');
    }
    public function setCookie(Request $request){
        $data = [
            "username" => "markjoseph",
            "password" => "asdsadas"
        ];
        $cookie = cookie('name', json_encode($data) , 30);
      return response()->json([
          "username"=>"asdasda",
          "password"=> "asdasss"
      ])->cookie($cookie);
  
    }

}
