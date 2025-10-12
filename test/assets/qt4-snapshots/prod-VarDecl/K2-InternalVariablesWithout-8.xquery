declare variable $local:myVar := local:myFunction();

declare function local:myFunction2 () {
  local:myFunction4()
};

declare function local:myFunction4 () {
  local:myFunction2(), $local:myVar
};

declare function local:myFunction3 () {
  local:myFunction4()
};

declare function local:myFunction () {
  local:myFunction3()
};

local:myFunction()
