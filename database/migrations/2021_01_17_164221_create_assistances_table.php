<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssistancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assistances', function (Blueprint $table) {
            $table->bigIncrements('assistance_id');
            $table->integer('program')->comment('program_id');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('contact_number');
            $table->string('email');
            $table->text('attachment');
            $table->dateTime('date_start');
            $table->dateTime('date_end');
            $table->text('status')->default(0)->comment('0=New, 1=Approved, 2=Declined, 3=ApprovedDeleted, 4=DeclinedDeleted');
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
        Schema::dropIfExists('assistances');
    }
}
