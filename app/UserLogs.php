<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserLogs extends Model {
    protected $table = 'user_logs';
    public $pimary_key = 'user_log_id';
    public $timestamps = true;
}
