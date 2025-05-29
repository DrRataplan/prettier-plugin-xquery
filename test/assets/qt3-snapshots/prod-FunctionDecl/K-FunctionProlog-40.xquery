declare function local:myFunction ($local:myVar as xs:integer) {
  for $local:myVar in ($local:myVar, 3)
  return $local:myVar
};

deep-equal(local:myFunction(1), (1, 3))
