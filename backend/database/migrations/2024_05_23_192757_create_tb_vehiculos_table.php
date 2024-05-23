<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbVehiculosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_vehiculos', function (Blueprint $table) {
            $table->id();
            $table->string("nombre");$table->unsignedBigInteger('conductor_id'); 
            $table->foreign('conductor_id')->references('id')->on('tb_conductores');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_vehiculos');
    }
}
