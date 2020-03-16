@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card-body">
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <h4 class="mb-3">Our people</h4>

                <ul class="list-group">
                    @foreach ($items as $item)
                        <li class="list-group-item">
                            <h4>{{ $item->name }}</h4>

                            <a href="/items/edit/{{ $item->id }}" class="btn btn-primary btn-sm">Open</a>

                            <form action="{{ action('ItemController@delete', $item) }}" class="d-inline-block" method="post">
                                @csrf
                                @method('delete')
                                <button class="btn btn-primary btn-sm">Delete</button>
                            </form>
                        </li>
                    @endforeach
                </ul>

                <h4 class="mt-4 mb-3">Other people</h4>

                <ul class="list-group">
                    @foreach ($people as $p)
                        <li class="list-group-item">{{ $p['username'] }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
