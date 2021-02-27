<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumn3ToUsersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('first_name')->after('id');
            $table->string('middle_name')->nullable()->after('first_name');
            $table->string('last_name')->after('middle_name');
        });

        $data = array(
            array(
                'id' => 1, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'ADMINISTRATOR', 
                'email' => 'admin.admin@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 1,
                'portal' => 'ADMIN',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ), 
            array(
                'id' => 2, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'STAFF', 
                'email' => 'admin.staff@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 2,
                'portal' => 'ADMIN',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ),
            array(
                'id' => 3, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'ADMINISTRATOR', 
                'email' => 'cod.admin@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 1,
                'portal' => 'COD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ), 
            array(
                'id' => 4, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'STAFF', 
                'email' => 'cod.staff@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 2,
                'portal' => 'COD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ),
            array(
                'id' => 5, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'ADMINISTRATOR', 
                'email' => 'spd.admin@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 1,
                'portal' => 'SPD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ), 
            array(
                'id' => 6, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'STAFF', 
                'email' => 'spd.staff@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 2,
                'portal' => 'SPD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ),
            array(
                'id' => 7, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'ADMINISTRATOR', 
                'email' => 'vdd.admin@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 1,
                'portal' => 'VDD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ), 
            array(
                'id' => 8, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'STAFF', 
                'email' => 'vdd.staff@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 2,
                'portal' => 'VDD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ),
            array(
                'id' => 9, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'ADMINISTRATOR', 
                'email' => 'wrd.admin@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 1,
                'portal' => 'WRD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ), 
            array(
                'id' => 10, 
                'first_name' => 'DEFAULT', 
                'last_name' => 'STAFF', 
                'email' => 'wrd.staff@mail.com', 
                'password' => Hash::make('123456789'), 
                'api_token' => Str::random(60),
                'account_type' => 2,
                'portal' => 'WRD',
                'visibility' => '0',
                'status' => '1',
                'created_at' => DB::raw('CURRENT_TIMESTAMP'),
                'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
            ),
        );

        DB::table('users')->insert(
            $data
        );

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {

        Schema::table('users', function (Blueprint $table) {
            //
        });

    }

}
