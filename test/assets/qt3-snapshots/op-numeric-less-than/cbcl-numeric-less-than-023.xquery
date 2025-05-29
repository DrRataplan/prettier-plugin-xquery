declare function local:factorial ($arg as xs:integer) as xs:integer {
  if ($arg lt 1) then
    1
  else
    $arg * local:factorial($arg - 1)
};

let $x := local:factorial(5)
return 121 lt $x + 2
