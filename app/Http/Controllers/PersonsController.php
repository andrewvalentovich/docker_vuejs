<?php


namespace App\Http\Controllers;


class PersonsController
{
    public function __invoke()
    {
        $persons = [
            [
                'id'   => 1,
                'name' => 'Andrew',
                'age'  => 43,
                'job'  => 'Traveler'
            ],
            [
                'id'   => 2,
                'name' => 'Nick',
                'age'  => 21,
                'job'  => 'Java junior'
            ],
            [
                'id'   => 3,
                'name' => 'Vladimir',
                'age'  => 52,
                'job'  => 'Driver'
            ]
        ];

        return $persons;
    }
}
