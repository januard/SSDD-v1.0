<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model {
    protected $table = 'roles';
    public $pimary_key = 'role_id';
    public $timestamps = true;
}
