<?php

declare(strict_types=1);

use App\AbstractFactory\Manufacturer\MsiManufacturer;
use App\AbstractFactory\Manufacturer\AsusManufacturer;
use App\Builder\Builder\CarBuilder;
use App\Builder\Director;

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

function builder(): void {
    echo "<--- Testing Builder pattern... --->\n";

    $director = new Director();
    $carBuilder = new CarBuilder();

    $lambo = $director->buildLambo($carBuilder);
    $bugatti = $director->buildBugatti($carBuilder);

    echo "Lambo: {$lambo->getBrand()} {$lambo->getModel()} {$lambo->getColor()} {$lambo->getDoors()} {$lambo->getScreenType()} {$lambo->getWeight()} {$lambo->getHeight()}\n";
    echo "Bugatti: {$bugatti->getBrand()} {$bugatti->getModel()} {$bugatti->getColor()} {$bugatti->getDoors()} {$bugatti->getScreenType()} {$bugatti->getWeight()} {$bugatti->getHeight()}\n";

    echo "<--- Builder pattern test done! --->\n";
}

abstractFactory();
builder();