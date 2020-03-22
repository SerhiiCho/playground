<?php

/**
 * Create and serialize ArrayObject
 */
$arr = new ArrayObject([
    'first' => 'nice',
    'second' => 'Second nice',
]);

$serial = $arr->serialize();

/**
 * Create new one and unserialize it
 */
$new_obj = new ArrayObject();
$new_obj->unserialize($serial);
print_r($new_obj);

print(PHP_EOL);
