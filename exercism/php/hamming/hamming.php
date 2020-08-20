<?php

function distance(string $strandA, string $strandB) : int {
    $result = 0;

    if (strlen($strandA) !== strlen($strandB))
        throw new InvalidArgumentException('DNA strands must be of equal length.');

    for ($i = 0; $i < strlen($strandA); $i++)
        if ($strandA[$i] !== $strandB[$i])
            $result++;

    return $result;
}
