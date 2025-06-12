<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    defer(function () {
        sleep(5);
        info('nice');
    });

    return view('welcome');
});
