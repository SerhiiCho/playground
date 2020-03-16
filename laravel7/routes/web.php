<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', fn() => view('welcome'));

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/items/edit/{item}', 'ItemController@edit');
