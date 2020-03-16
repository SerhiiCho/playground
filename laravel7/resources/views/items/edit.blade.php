@extends('layouts.app')

@section('content')

<div class="container">
    <a href="/home" class="btn btn-primary">Back</a>

    <div class="pt-4">
        <h1>Hello {{ $item->name }}</h1>
    </div>
</div>

@endsection