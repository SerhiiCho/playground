<?php

declare(strict_types=1);

namespace App;

class Tree
{
    private Node $root;

    public function __construct(Node $root)
    {
        $this->root = $root;
    }

    public function getTree(?Node $node = null): string
    {
        if (is_null($node)) {
            $node = $this->root;
        }

        $children = '';
        $right_node = is_null($node->right) ? '' : $this->getTree($node->right);
        $left_node = is_null($node->left) ? '' : $this->getTree($node->left);

        if (!is_null($node->left) || !is_null($node->right)) {
            $children = "<div class='children'>{$left_node}{$right_node}</div>";
        }

        $result = <<<HTML
            <div class="node">
                <span><b>{$node->number}</b></span>
                $children
            </div>
        HTML;

        return $result;
    }
}
