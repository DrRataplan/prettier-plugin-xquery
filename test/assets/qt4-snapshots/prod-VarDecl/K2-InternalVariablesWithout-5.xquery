declare variable $local:myVar := local:myFunction();

declare function local:myFunction2 () {
  $local:myVar, 1, local:myFunction()
};

declare function local:myFunction () {
  local:myFunction2()
};

$local:myVar
