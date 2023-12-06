<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat', function () {
    return true;
});
