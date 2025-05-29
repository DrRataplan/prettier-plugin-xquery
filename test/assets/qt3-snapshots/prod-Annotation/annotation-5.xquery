declare namespace eg = "http://example.com";

declare %eg:integer(1234) variable $foo := 0;

declare %eg:integer(1234) function local:foo ($arg) {
  $arg
};

local:foo($foo)
