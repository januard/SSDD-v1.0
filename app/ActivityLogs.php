<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityLogs extends Model {
    protected $table = 'activity_logs';
    public $pimary_key = 'activity_log_id';
    public $timestamps = true;
}
