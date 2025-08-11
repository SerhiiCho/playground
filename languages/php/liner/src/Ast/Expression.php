<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

interface Expression extends Node
{
    public function expressionNode();
}
