declare function local:recursiveFunction ($i as xs:integer) as xs:integer {
  if ($i eq 5) then
    $i
  else
    local:recursiveFunction($i + 1)
};

declare function local:proxy () as xs:integer {
  local:recursiveFunction(0) + 3
};

local:proxy()
