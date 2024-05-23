<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conductor extends Model
{
    
    protected $table = 'tb_conductores';

    protected $fillable = [
        'nombre'
    ];
}
