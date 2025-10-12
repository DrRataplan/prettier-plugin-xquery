declare variable $local:myVar := local:myFunction();

declare function local:myFunction () {
  if (current-date() lt xs:date("1990-01-01")) then
    local:myFunction()
  else (
  ),
  1,
  $local:myVar
};

$local:myVar
