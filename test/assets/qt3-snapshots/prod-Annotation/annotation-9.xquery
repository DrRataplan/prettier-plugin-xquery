declare namespace eg = "http://example.com";

declare %eg:many(12e34, "abc", 1234) variable $foo := 0;

declare %eg:many("xyz", 987, 12.3) function local:foo ($arg) {
  $arg
};

local:foo($foo)
