<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProgramsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('programs', function (Blueprint $table) {
            $table->bigIncrements('program_id');
            $table->string('program', 500);
            $table->string('code');
            $table->integer('status')->default(1)->comment('0=Deleted, 1=Activated, 2=Deactivated');
            $table->integer('created_by');
            $table->longText('description')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });

        $data = array(
            array(
                'program_id' => 1, 
                'program' => 'Manpower Barangay Based Skills Training', 
                'code' => 'MBBST', 
                'description' => 'None', 
                'status' => 1, 
                'created_by' => 7, 
            ), 
            array(
                'program_id' => 2, 
                'program' => 'Soft Trade Skills Training', 
                'code' => 'STST', 
                'description' => 'None', 
                'status' => 1, 
                'created_by' => 7, 
            ), 
            array(
                'program_id' => 3, 
                'program' => 'Productivity Skills and Capability Building Training', 
                'code' => 'PSCBT', 
                'description' => 'None', 
                'status' => 1, 
                'created_by' => 7, 
            ), 
            array(
                'program_id' => 4, 
                'program' => 'Small Income Generating Assistance (Capital Assistance)', 
                'code' => 'SIGACA', 
                'description' => 'None', 
                'status' => 1, 
                'created_by' => 7, 
            ), 
        );

        DB::table('programs')->insert(
            $data
        );

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programs');
    }
}
