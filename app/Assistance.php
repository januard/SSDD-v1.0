<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assistance extends Model {
    
    protected $table = 'assistances';
    protected $primaryKey = 'assistance_id';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'program', 'first_name', 'middle_name', 'last_name', 'contact_number',
        'email', 'attachment', 'status', 
        'created_by'
    ];

}
