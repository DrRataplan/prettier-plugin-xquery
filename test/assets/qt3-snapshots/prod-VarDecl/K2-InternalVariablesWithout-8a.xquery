declare variable $local:myVar := local:myFunction();

declare function local:myFunction2 () {
  local:myFunction4()
};

declare function local:myFunction4 () {
  if (current-date() lt xs:date("1990-01-01")) then
    local:myFunction2()
  else (
  ),
  $local:myVar
};

declare function local:myFunction3 () {
  local:myFunction4()
};

declare function local:myFunction () {
  local:myFunction3()
};

local:myFunction()
