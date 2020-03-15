<?php

ob_start();
include 'html.html';
$string = ob_get_clean();

echo $string;
