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
    <nav style="margin-bottom:17px">
        <div class="nav-wrapper red darken-3">
            <div class="container">
                <a href="#" class="brand-logo">Coronavirus dashboard</a>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col m6">
                <table>
                    <thead>
                        <tr>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><?= $data->latest->confirmed; ?></td>
                            <td><?= $data->latest->deaths; ?></td>
                            <td><?= $data->latest->recovered; ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>