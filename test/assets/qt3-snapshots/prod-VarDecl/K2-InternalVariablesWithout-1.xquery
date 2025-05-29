declare variable $local:myVar := local:myFunction();

declare function local:myFunction () {
  local:myFunction(), 1, $local:myVar
};

$local:myVar
