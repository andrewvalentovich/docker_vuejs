<?php


namespace App\Http\Controllers\Person;


use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;
use function Symfony\Component\Routing\Loader\Configurator\collection;

class GetController extends Controller
{
    public function __invoke()
    {
        $people = Person::all();
        return PersonResource::collection($people);
    }
}
