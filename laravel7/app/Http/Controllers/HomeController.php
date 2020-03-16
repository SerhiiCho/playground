<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\View\View;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        return view('home', ['items' => Item::get()]);
    }
}
