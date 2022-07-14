<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'Person', 'prefix' => 'people'], function() {
    Route::post('/', ['App\Http\Controllers\Person\StoreController', '__invoke']);
    Route::get('/', ['App\Http\Controllers\Person\GetController', '__invoke']);
    Route::get('/{person}/', ['App\Http\Controllers\Person\GetOneController', '__invoke']);
    Route::patch('/{person}', ['App\Http\Controllers\Person\UpdateController', '__invoke']);
    Route::delete('/{person}', ['App\Http\Controllers\Person\DeleteController', '__invoke']);
});
