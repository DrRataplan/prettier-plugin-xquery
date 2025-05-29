declare variable $local:myVar := 1;

declare function local:myFunction ($local:myVar) {
  $local:myVar
};

$local:myVar, local:myFunction(2)
