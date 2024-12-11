<?php

declare(strict_types=1);

use Serhii\Ago\LangOverwrite;
use Serhii\Ago\LangForm;
use Serhii\Ago\TimeAgo;
use Serhii\Ago\Config;
use Serhii\Ago\Lang;

require_once 'vendor/autoload.php';

$config = new Config(overwrites: [
    new LangOverwrite(
        lang: Lang::EN,
        ago: 'before',
        second: new LangForm(one: 's', other: 's'),
    ),
]);

TimeAgo::configure($config);

$date = '-10 seconds';
echo TimeAgo::trans($date); // "10 s before"
