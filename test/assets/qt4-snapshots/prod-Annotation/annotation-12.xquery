declare namespace eg = "http://example.com";

declare %eg:one %eg:two %eg:three(1) %eg:four variable $foo := 0;

declare %eg:one %eg:two %eg:three(1) %eg:four function local:foo ($arg) {
  $arg
};

local:foo($foo)
