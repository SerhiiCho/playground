<?php

declare(strict_types=1);

use App\Memento\Editor;
use App\Builder\Director;
use App\Builder\Builder\CarBuilder;
use App\AbstractFactory\Manufacturer\MsiManufacturer;
use App\AbstractFactory\Manufacturer\AsusManufacturer;

require_once __DIR__ . '/vendor/autoload.php';

function abstractFactory(): void {
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
}

function builder(): void {
    $director = new Director();
    $carBuilder = new CarBuilder();

    $lambo = $director->buildLambo($carBuilder);
    $bugatti = $director->buildBugatti($carBuilder);

    echo "Lambo: {$lambo->getBrand()} {$lambo->getModel()} {$lambo->getColor()} {$lambo->getDoors()} {$lambo->getScreenType()} {$lambo->getWeight()} {$lambo->getHeight()}\n";
    echo "Bugatti: {$bugatti->getBrand()} {$bugatti->getModel()} {$bugatti->getColor()} {$bugatti->getDoors()} {$bugatti->getScreenType()} {$bugatti->getWeight()} {$bugatti->getHeight()}\n";
}

function memento(): void {
    $editor = new Editor();
    $editor->write('Do');
    $editor->write('Do you');
    $editor->write('Do you like');
    $editor->write('Do you like it');
    $editor->write('Do you like it?');
    $editor->write('Do you like it???');

    $editor->undo();

    echo $editor->getText();
}

// abstractFactory();
// builder();
memento();