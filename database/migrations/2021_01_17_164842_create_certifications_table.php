<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCertificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('certifications', function (Blueprint $table) {
            $table->bigIncrements('certification_id');
            $table->integer('program')->comment('program_id');
            $table->integer('certificate_template')->default(0)->comment('certificate_template_id');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->text('date_of_certification');
            $table->longText('description')->nullable();
            $table->text('other_1', 500)->nullable();
            $table->text('other_2', 500)->nullable();
            $table->text('status')->default(0)->comment('0=Active, 1=Deleted');
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
        Schema::dropIfExists('certifications');
    }
}
