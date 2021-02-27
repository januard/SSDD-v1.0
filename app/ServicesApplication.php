<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicesApplication extends Model {
    
    protected $table = 'services_applications';
    protected $primaryKey = 'services_application_id';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'program_id', 'department', 'first_name', 'middle_name', 'last_name', 'contact_number', 
        'email', 'message', 'remarks'
    ];

}
