<?php

class VersionManager
{
    private int $major = 0;
    private int $minor = 0;
    private int $patch = 0;
    private array $versions = [];

    public function __construct(private ?string $input = null)
    {
        $this->setVersions($input);
    }

    public function release(): string
    {
        return $this->getVersion();
    }

    public function major(): self
    {
        $this->versions[] = $this->getVersion();
        $this->major++;
        $this->minor = 0;
        $this->patch = 0;

        return $this;
    }

    public function minor(): self
    {
        $this->versions[] = $this->getVersion();
        $this->minor++;
        $this->patch = 0;

        return $this;
    }

    public function patch(): self
    {
        $this->versions[] = $this->getVersion();
        $this->patch++;

        return $this;
    }

    public function rollback(): self
    {
        if (empty($this->versions)) {
            throw new Exception('Cannot rollback!');
        }

        $lastVersion = array_pop($this->versions);

        $this->setVersions($lastVersion);

        if ($this->major < 0 || $this->minor < 0 || $this->patch < 0) {
            throw new Exception('Cannot rollback!');
        }

        return $this;
    }

    private function setVersions(?string $input): void
    {
        if (!$input) {
            $this->patch++;
            return;
        }

        $split = explode('.', $input);

        $first = $split[0] ?? 0;
        $second = $split[1] ?? 0;
        $third = $split[2] ?? 0;

        if (!is_numeric($first) || !is_numeric($second) || !is_numeric($third)) {
            throw new Exception('Error occured while parsing version!');
        }

        $this->major = (int) $first;
        $this->minor = (int) $second;
        $this->patch = (int) $third;
    }

    private function getVersion(): string
    {
        if ($this->major === 0 && $this->minor === 0 && $this->patch === 0) {
            return '0.0.1';
        }

        return sprintf('%d.%d.%d', $this->major, $this->minor, $this->patch);
    }
}

function assertSame(string $input, string $result)
{
    if ($input !== $result) {
        echo "❌ Failed asserting that `$input` equals to `$result`\n";
    }

    echo "✅ Test passes!\n";
}

assertSame("0.0.1", (new VersionManager())->release());
assertSame("0.0.1", (new VersionManager(""))->release());
assertSame("1.2.3", (new VersionManager("1.2.3"))->release());
assertSame("1.2.3", (new VersionManager("1.2.3.4"))->release());
assertSame("1.2.3", (new VersionManager("1.2.3.d"))->release());
assertSame("1.0.0", (new VersionManager("1"))->release());
assertSame("1.1.0", (new VersionManager("1.1"))->release());

// Major
assertSame("1.0.0", (new VersionManager())->major()->release());
assertSame("2.0.0", (new VersionManager("1.2.3"))->major()->release());
assertSame("3.0.0", (new VersionManager("1.2.3"))->major()->major()->release());

// Minor
assertSame("0.1.0", (new VersionManager())->minor()->release());
assertSame("1.3.0", (new VersionManager("1.2.3"))->minor()->release());
assertSame("1.1.0", (new VersionManager("1"))->minor()->release());
assertSame("4.2.0", (new VersionManager("4"))->minor()->minor()->release());

// Patch
assertSame("0.0.2", (new VersionManager())->patch()->release());
assertSame("1.2.4", (new VersionManager("1.2.3"))->patch()->release());
assertSame("4.0.2", (new VersionManager("4"))->patch()->patch()->release());

// Rollback
assertSame("0.0.1", (new VersionManager())->major()->rollback()->release());
assertSame("0.0.1", (new VersionManager())->minor()->rollback()->release());
assertSame("0.0.1", (new VersionManager())->patch()->rollback()->release());
assertSame("1.0.0", (new VersionManager())->major()->patch()->rollback()->release());
assertSame("1.0.0", (new VersionManager())->major()->patch()->rollback()->major()->rollback()->release());

try {
    new VersionManager("a.b.c");
    echo "❌ a.b.c test didn't pass!\n";
} catch (Exception $e) {
    assertSame('Error occured while parsing version!', $e->getMessage());
    echo "✅ Test passes!\n";
}

try {
    (new VersionManager())->rollback();
    echo "❌ rollback test didn't pass!\n";
} catch (Exception $e) {
    assertSame('Cannot rollback!', $e->getMessage());
}

try {
    (new VersionManager())->major()->rollback()->rollback()->release();
    echo "❌ last test didn't pass!\n";
} catch (Exception $e) {
    assertSame('Cannot rollback!', $e->getMessage());
    echo "✅ Test passes!\n";
    echo "All tests pass!!!!\n";
}
