<?php require_once 'inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coronavirus stats</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <style>
        table tbody tr td {
            padding: 5px;
        }
    </style>
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

        <table style="margin-top: 20px" class="striped">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($data->locations as $loc): ?>
                    <tr>
                        <td><?= $loc->country; ?></td>
                        <td><?= nice_number($loc->latest->confirmed); ?></td>
                        <td><?= nice_number($loc->latest->deaths); ?></td>
                        <td><?= nice_number($loc->latest->recovered); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>