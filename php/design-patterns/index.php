<?php

declare(strict_types=1);

use App\AbstractFactory\Manufacturer\MsiManufacturer;
use App\AbstractFactory\Manufacturer\AsusManufacturer;

require_once __DIR__ . '/vendor/autoload.php';

function abstractFactory(): void {
    echo "<--- Testing Abstract Factory pattern... --->\n";

    $msi = new MsiManufacturer();

    $msiGpu = $msi->createGpu();
    $msiMonitor = $msi->createMonitor();

    $msiGpu->assemble();
    $msiMonitor->assemble();

    $asus = new AsusManufacturer();

    $asusGpu = $asus->createGpu();
    $asusMonitor = $asus->createMonitor();

    $asusGpu->assemble();
    $asusMonitor->assemble();

    echo "<--- Abstract Factory pattern test done! --->\n";
}

abstractFactory();