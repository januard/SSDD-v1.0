<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model {

    protected $table = 'certifications';
    protected $primaryKey = 'certification_id';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'program', 'certification_template', 'first_name', 'middle_name', 'last_name', 
        'date_of_certification', 'description', 'other_1', 'other_2', 'created_by'
    ];

}
