declare function local:fn1 ($n as xs:integer) as xs:integer {
  local:fn2($n)
};

declare function local:fn2 ($n as xs:integer) as xs:integer {
  if ($n = 1) then
    1
  else
    $n + local:fn1($n - 1)
};

local:fn1(4)
