<?php

declare(strict_types=1);

namespace App;

use Serhii\GoodbyeHtml\Parser;

class MainPage
{
    public function getContent(): string
    {
        $parser = new Parser(__DIR__ . '/content.html', [
            'name' => 'Anna Korotchaeva',
            'age' => 24,
            'isPretty' => true,
            'city' => 'Kharkiv',
            'tellAboutHerWork' => true,
        ]);

        return $parser->parseHtml();
    }
}