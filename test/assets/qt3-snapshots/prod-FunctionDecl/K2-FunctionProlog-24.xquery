declare function local:distinct-nodes-stable ($arg as node()*) as xs:boolean* {
  for $a in $arg
  return $a
};

local:distinct-nodes-stable((<element1 />, <element2 />))
