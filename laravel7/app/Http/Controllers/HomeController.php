<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\View\View;
use Illuminate\Support\Facades\Http;

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
        $res = Http::get('https://jsonplaceholder.ir/users');
        return view('home', ['items' => Item::get(), 'people' => $res->json()]);
    }
}
