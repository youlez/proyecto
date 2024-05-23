<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Conductor;

class Vehiculo extends Model
{   
    
    protected $table = 'tb_vehiculos';

    protected $fillable = [
        'nombre',
        'conductor_id'
    ];

    
    public function conductor()
    {
        return $this->hasOne(Conductor::class, 'id', 'conductor_id');
    }
}
