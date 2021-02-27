<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model {

    protected $table = 'appointments';
    protected $primaryKey = 'appointment_id';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'appointment', 'description', 'start_date', 'end_date', 'time', 
        'source', 'event_color', 'notification', 'created_by'
    ];
    
}
