declare namespace eg = "http://example.com";

declare %eg:one %eg:two %eg:three variable $foo := 0;

declare %eg:one %eg:two %eg:three function local:foo ($arg) {
  $arg
};

local:foo($foo)
