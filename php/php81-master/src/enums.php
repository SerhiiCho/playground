<?php

namespace PHP81;

require_once __DIR__.'/../vendor/autoload.php';

// RFC: https://wiki.php.net/rfc/enumerations

enum Availability: string {
    case IN_STOCK = 'in';
    case OUT_OF_STOCK = 'out';
    case ORDER = 'order';

    public static function title(self $value): string
    {
        return match ($value) {
            self::IN_STOCK => 'In stock',
            self::OUT_OF_STOCK => 'Out of stock',
            self::ORDER => 'By order',
        };
    }
}

$availability = Availability::from('in');

dd(Availability::title($availability));
