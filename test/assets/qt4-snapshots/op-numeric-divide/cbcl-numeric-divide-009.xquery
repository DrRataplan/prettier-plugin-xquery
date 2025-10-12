declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

local:square(2.0) div 0.0
