<?php


namespace App\Http\Controllers\Person;


use App\Http\Controllers\Controller;
use App\Models\Person;

class GetOneController extends Controller
{
    public function __invoke(Person $person)
    {
        return $person;
    }
}
