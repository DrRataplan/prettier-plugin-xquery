declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

local:square(9223372036854775808.1) gt 0
