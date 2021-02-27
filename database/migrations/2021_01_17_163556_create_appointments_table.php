<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->bigIncrements('appointment_id');
            $table->integer('assistance')->nullable()->comment('assistance_id');
            $table->string('program')->nullable()->comment('program_id');
            $table->string('appointment', 500);
            $table->longText('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('time');
            $table->string('source');
            $table->string('event_color');
            $table->dateTime('notification');
            $table->text('status')->default(0)->comment('0=New, 1=Pending, 2=On-Going, 3=Completed, 4=Deleted');
            $table->integer('approve_by')->nullable()->comment('user_id');
            $table->integer('created_by')->comment('user_id');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
