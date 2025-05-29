declare variable $local:myVar := local:myFunction();

declare function local:myFunction2 () {
  if (current-date() lt xs:date("1990-01-01")) then
    local:myFunction()
  else (
  ),
  $local:myVar
};

declare function local:myFunction () {
  local:myFunction2()
};

local:myFunction()
