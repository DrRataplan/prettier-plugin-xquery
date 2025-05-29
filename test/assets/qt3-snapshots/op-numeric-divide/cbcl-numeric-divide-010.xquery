declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

local:square(7.0) div 1.0
