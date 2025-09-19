<?php

$text = 'Emma Stone is the greatest actress';
$algo = 'aes-256-cbc';
$passphrase = 'my-passphrase';

/* $encrypted = openssl_encrypt($text, $algo, $passphrase); */
/* var_dump($encrypted); */

$algo = 'aes-256-cbc';
$passphrase = 'my-passphrase';
$encrypted = 'j+7Si0X86xhS96RCZCSXYVQUyv6/irmmSTPMJYkep9You1+rj3bT4XX3FTR8xGKX';

$text = openssl_decrypt($encrypted, $algo, $passphrase);

var_dump($text);
