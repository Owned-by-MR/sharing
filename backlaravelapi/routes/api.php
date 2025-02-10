<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Fruit;
use App\Models\Musiclist;
use App\Models\Sale;


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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/fruits', function () {
    return Fruit::all();
})->middleware('auth:sanctum');

Route::get('/musiclists', function () {
    return Musiclist::all();
})->middleware('auth:sanctum');

Route::get('/sales', function () {
    return Sale::all();
})->middleware('auth:sanctum');
