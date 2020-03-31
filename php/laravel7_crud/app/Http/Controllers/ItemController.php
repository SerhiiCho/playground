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

    public function create(): View
    {
        return view('items.create');
    }

    public function store(): RedirectResponse
    {
        Item::create(['name' => request('name')]);
        return redirect('home')->withStatus('Item was created');
    }

    public function destroy(Item $item): RedirectResponse
    {
        $item->delete();
        return redirect('home')->withStatus("$item->name was deleted!");
    }

    public function update(Item $item): RedirectResponse
    {
        $item->update(['name' => request('name')]);
        return redirect('home')->withStatus("$item->name was updated!");
    }
}
