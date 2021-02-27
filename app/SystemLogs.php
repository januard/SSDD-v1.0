<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SystemLogs extends Model {
    protected $table = 'system_logs';
    public $pimary_key = 'system_log_id';
    public $timestamps = true;
}
