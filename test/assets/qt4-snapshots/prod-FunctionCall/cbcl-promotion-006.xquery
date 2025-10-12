declare function local:f ($arg as xs:anyAtomicType?) {
  $arg
};

local:f(index-of((1, 2, 3, 2), 2))
