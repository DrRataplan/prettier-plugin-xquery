declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

let $x := local:square(4)
return 4 eq 1 - $x
