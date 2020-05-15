<?php

declare(strict_types=1);

namespace App;

class Tree
{
    public ?Node $root = null;

    public function searchTree(int $number, ?Node &$node): ?Node
    {
        if ($number < $node->number) {
            if (is_null($node->left)) {
                $node->left = new Node($number);
                return null;
            } else if (!is_null($node->left)) {
                return $this->searchTree($number, $node->left);
            }
        } else if ($number > $node->number) {
            if (is_null($node->right)) {
                $node->right = new Node($number);
                return null;
            } else if (!is_null($node->right)) {
                return $this->searchTree($number, $node->right);
            }
        }
        return null;
    }

    public function add(int $number): ?Node
    {
        $node = $this->root;

        if ($node === null) {
            $this->root = new Node($number);
            return null;
        }

        return $this->searchTree($number, $node);
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
