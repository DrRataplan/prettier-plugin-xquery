declare variable $local:myVar := local:myFunction();

declare function local:myFunction2 () {
  local:myFunction(), $local:myVar
};

declare function local:myFunction () {
  local:myFunction2()
};

local:myFunction()
