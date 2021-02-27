<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Referral extends Model {

    protected $table = 'referrals';
    protected $primaryKey = 'referral_id';
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'referred_by', 'first_name', 'middle_name', 'last_name', 'contact_number', 'email', 'cv', 'created_by'
    ];

}
