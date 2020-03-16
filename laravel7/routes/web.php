<?php

use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

function of(string $str): Stringable {
    return Str::of($str);
}

Route::get('/', function () {
    return view('welcome', [
        'var' => of('nice')->upper(),
    ]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
