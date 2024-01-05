<?php

class VersionManager
{
    private int $major = 0;
    private int $minor = 0;
    private int $patch = 0;

    public function __construct(private ?string $input = null)
    {
        $this->parseInput();
    }

    public function release(): string
    {
        return $this->getVersion();
    }

    public function major(): self
    {
        $this->major++;
        $this->minor = 0;
        $this->patch = 0;

        return $this;
    }

    private function parseInput(): void {
        if (!$this->input) {
            $this->patch++;
            return;
        }

        $split = explode('.', $this->input);
        $this->major = (int) ($split[0] ?? 0);
        $this->minor = (int) ($split[1] ?? 0);
        $this->patch = (int) ($split[2] ?? 0);
    }

    private function getVersion(): string
    {
        return sprintf('%d.%d.%d', $this->major, $this->minor, $this->patch);
    }
}

function assertSame(string $input, string $result) {
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
assertSame("1.0.0", (new VersionManager())->major()->release());
assertSame("2.0.0", (new VersionManager("1.2.3"))->major()->release());
assertSame("3.0.0", (new VersionManager("1.2.3"))->major()->major()->release());
