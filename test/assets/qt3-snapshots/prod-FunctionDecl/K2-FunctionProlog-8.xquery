declare function local:myFunction ($arg as xs:integer) as xs:integer {
  if ($arg eq 1) then
    $arg
  else
    local:myFunction3($arg - 1)
};

declare function local:myFunction2 ($arg as xs:integer) as xs:integer {
  local:myFunction($arg)
};

declare function local:myFunction3 ($arg as xs:integer) as xs:integer {
  local:myFunction2($arg)
};

local:myFunction3(3) eq 1
