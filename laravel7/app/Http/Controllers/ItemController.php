<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ItemController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function edit(Item $item): View
    {
        return view('items.edit', compact('item'));
    }

    public function delete(Item $item): RedirectResponse
    {
        $item->delete();
        return back();
    }
}
