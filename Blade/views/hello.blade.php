<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Blade example</title>
</head>
<body>
    @include('nav')

    <div class="container">
        <ul class="collection">
            @foreach ($users as $user)
                <li class="collection-item">My name is {{ $user->name }} and I'm {{ $user->age }} years old</li>
            @endforeach
        </ul>
    </div>
</body>
</html>