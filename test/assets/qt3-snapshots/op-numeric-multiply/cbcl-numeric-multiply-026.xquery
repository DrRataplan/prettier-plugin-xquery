declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

local:square(9223372036854775808) gt 0
