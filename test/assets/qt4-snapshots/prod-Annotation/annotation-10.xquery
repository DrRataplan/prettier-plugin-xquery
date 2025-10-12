declare %Q{http://example.com}bar variable $foo := 0;

declare %Q{http://example.com}bar function local:foo ($arg) {
  $arg
};

local:foo($foo)
