declare function local:factorial ($arg as xs:integer) as xs:integer {
  if ($arg lt 1) then
    1
  else
    $arg * local:factorial($arg - 1)
};

let $x := local:factorial(5)
return $x - 1 gt 121
