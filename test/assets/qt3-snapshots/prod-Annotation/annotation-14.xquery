declare namespace eg = "http://example.com";

declare %eg:one(1, 2, 3) %eg:two("a", "b") %eg:three(1.234) variable $foo := 0;

declare %eg:one(1, 2, 3) %eg:two("a", "b") %eg:three(1.234) function local:foo (
  $arg
) {
  $arg
};

local:foo($foo)
