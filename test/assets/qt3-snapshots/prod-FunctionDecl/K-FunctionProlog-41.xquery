declare function local:myFunction ($local:myVar) {
  $local:myVar + 1
};

local:myFunction(1), local:myFunction("this will fail")
