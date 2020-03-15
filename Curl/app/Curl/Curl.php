<?php

namespace Curl;

class Curl
{
    private $ch;

    /**
     * @return void
     */
    public function __construct(string $url)
    {
        $this->ch = curl_init();
        curl_setopt($this->ch, CURLOPT_URL, $url);
    }

    /**
     * @return void
     */
    public function setopt($opt, $value): void
    {
        curl_setopt($this->ch, $opt, $value);
    }

    /**
     * @return void
     */
    public function exec()
    {
        return curl_exec($this->ch);
    }

    /**
     * @return void
     */
    public function close(): void
    {
        curl_close($this->ch);
    }
}
