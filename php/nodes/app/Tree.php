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

        $children = null;
        $right_node = is_null($node->right) ? '' : $this->getTree($node->right);
        $left_node = is_null($node->left) ? '' : $this->getTree($node->left);

        if (!is_null($node->left) || !is_null($node->right)) {
            $children = "<div class='children'>{$left_node}{$right_node}</div>";

            if (!is_null($node->right) && !is_null($node->left)) {
                if ($node->left->number > $node->right->number) {
                    $children = "<div class='children'>{$right_node}{$left_node}</div>";
                } else {
                    $children = "<div class='children'>{$left_node}{$right_node}</div>";
                }
            }
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
