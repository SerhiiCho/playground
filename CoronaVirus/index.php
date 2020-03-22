<?php require_once 'inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coronavirus stats</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>
    <nav style="margin-bottom:25px">
        <div class="nav-wrapper red darken-3">
            <div class="container">
                <a href="#" class="brand-logo">Coronavirus dashboard</a>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <h5 class="col m4 center">
                Confirmed: <b><?= nice_number($data->latest->confirmed); ?></b>
            </h5>
            <h5 class="col m4 center">
                Deaths: <b><?= nice_number($data->latest->deaths); ?></b>
            </h6>
            <h5 class="col m4 center">
                Recovered: <b><?= nice_number($data->latest->recovered); ?></b>
            </h5>
        </div>

        <div class="divider"></div>

        <div class="row">
            <div class="col">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>