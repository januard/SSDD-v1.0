<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('roles', function (Blueprint $table) {
            $table->bigIncrements('role_id');
            $table->string('role')->unique();
            $table->integer('deletable')->default('1');
            $table->integer('changeable')->default('1');
            $table->integer('status')->default(1);
            $table->timestamps();
        });

        $data = array(
            array(
                'role_id' => 1, 
                'role' => 'Administrator', 
                'deletable' => '0', 
                'changeable' => '0', 
                'status' => 1
            ), 
            array(
                'role_id' => 2, 
                'role' => 'Staff', 
                'deletable' => '0', 
                'changeable' => '1', 
                'status' => 1
            ),
        );

        DB::table('roles')->insert(
            $data
        );

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {

        Schema::dropIfExists('roles');

    }

}
