@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-6 offset-3">
            <h2 class="mb-4">Add item</h2>

            <form action="{{ action('ItemController@store') }}" method="post">
                @csrf
                <div class="form-group">
                    <label for="title">Name</label>
                    <input type="text" class="form-control" name="name" id="title" placeholder="Enter the name">
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
</div>

@endsection