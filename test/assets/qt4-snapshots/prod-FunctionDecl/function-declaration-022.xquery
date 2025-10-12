declare function local:foo ($m as xs:integer) {
  $m
};

declare function local:foo ($n as xs:integer) {
  $n
};

local:foo(4)
