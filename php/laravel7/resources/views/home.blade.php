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
                            <h3>{{ $item->name }}</h3>

                            <a href="/item/{{ $item->id }}/edit" class="btn btn-primary btn-sm">Edit</a>

                            <form action="{{ action('ItemController@destroy', $item) }}" class="d-inline-block" method="post">
                                @csrf
                                @method('delete')
                                <button class="btn bg-danger text-white btn-sm">Delete</button>
                            </form>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
