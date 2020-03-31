@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-6 offset-3">
            <h2 class="mb-4">Edit item</h2>

            <form action="{{ action('ItemController@update', $item) }}" method="post">
                @csrf
                @method('put')

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="name" class="form-control" value="{{ $item->name }}" id="title" placeholder="Enter the title">
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
</div>

@endsection