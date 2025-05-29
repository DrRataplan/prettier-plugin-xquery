declare namespace eg = "http://example.com";

declare %eg:integer(12.34) variable $foo := 0;

declare %eg:integer(12.34) function local:foo ($arg) {
  $arg
};

local:foo($foo)
