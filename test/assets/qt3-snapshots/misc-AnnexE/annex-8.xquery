declare namespace eg = "http://example.org";

declare function eg:distinct-nodes-stable ($arg as node()*) as node()* {
  for $a in $arg
  let $before_a := fn:subsequence($arg, 1, $apos - 1)
  where every $ba in $before_a satisfies not($ba is $a)
  return $a
};

let $arg1 :=
  (<element1>some data 1</element1>, <element2>some data 2</element2>)
return eg:distinct-nodes-stable($arg1)
