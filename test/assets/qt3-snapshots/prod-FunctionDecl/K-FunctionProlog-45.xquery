declare function local:myFunction ($arg as item()?, $arg2 as xs:integer) {
  $arg, $arg2
};

local:myFunction((), 4.1)
