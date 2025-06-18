declare namespace eg = "http://example.org";

declare function eg:index-of-node (
  $sequence as node()*,
  $srch as node()
) as xs:integer* {
  for $n in $sequence
  where ($n is $srch)
  return $i
};

let $arg1 := (
  <element1>some data 1</element1>, <element2>some data 2</element2>
)
let $arg2 := $arg1[2]
return eg:index-of-node($arg1, exactly-one($arg2))
