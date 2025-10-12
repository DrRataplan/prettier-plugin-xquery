declare namespace eg = "http://example.com";

declare
  %eg:one
  %eg:two
  (: Lorem ipsum dolor sit amet. :)
  %eg:three(1)
  %Q{http://example.com}four
variable $foo := 0;

declare
  %eg:one
  %eg:two
  (: Lorem ipsum dolor sit amet. :)
  %eg:three(1)
  %Q{http://example.com}four
function local:foo ($arg) {
  $arg
};

local:foo($foo)
