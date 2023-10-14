<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

interface Statement extends Node
{
    public function statementNode();
}
