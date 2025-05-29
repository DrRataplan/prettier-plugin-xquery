declare variable $local:myVar := local:myFunction();

declare function local:myFunction () {
  $local:myVar, 1, local:myFunction()
};

$local:myVar
