<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    protected $table = 'categories';
    public $pimaryKey = 'category_id';
    public $timestamps = true;
}
