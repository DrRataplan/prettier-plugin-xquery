declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

local:square(4294967296.0) idiv 0.0000000000005 gt 0
