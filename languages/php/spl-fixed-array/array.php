<?php

const _ = PHP_EOL;
const __ = _._;

$arr = new SplFixedArray(3);
$arr->offsetSet(0, 'First');
$arr->offsetSet(1, 'Second');
$arr->offsetSet(2, 'Third');

// Iterate without a loop
echo $arr->current()._;
$arr->next();
echo $arr->current()._;
$arr->next();
echo $arr->current()._;
$arr->rewind();
echo $arr->current()._;
$arr->next();
echo $arr->current()._;
$arr->next();
echo $arr->current().__;

// Useful methods
var_dump($arr->offsetExists(2))._;

echo 'All items: ' . $arr->count()._;

$arr->rewind();
echo 'The first key is: ' . $arr->key().__;

$new_arr = SplFixedArray::fromArray([
    'hello', 'man', 'woman', 'boy', 'girl',
]);

print_r($new_arr).__;

echo 'The size is: ' . $new_arr->getSize()._;