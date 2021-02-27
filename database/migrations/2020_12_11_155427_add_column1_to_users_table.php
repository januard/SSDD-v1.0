<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumn1ToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('account_type')->comment('1=Administrator, 2=Staff, ...')->after('remember_token');
            $table->string('portal', 30)->after('account_type');
            $table->integer('visibility')->default(0)->comment('0=Offline, 1=Online')->after('portal');
            $table->integer('status')->default(1)->comment('0=Deactivated, 1=Activated')->after('visibility');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
