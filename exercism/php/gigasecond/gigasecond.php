<?php

function from(DateTimeImmutable $date): DateTimeImmutable
{
    return $date->add(new DateInterval('PT1000000000S'));
}