<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Program extends Model {
    
    protected $table = 'programs';
    protected $primaryKey = 'program_id';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'program', 'code', 'description', 'created_by'
    ];

}
