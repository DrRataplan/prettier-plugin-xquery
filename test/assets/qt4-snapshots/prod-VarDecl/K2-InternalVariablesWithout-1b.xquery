declare variable $local:myVar := local:myFunction();

declare function local:myFunction () {
  if (current-date() lt xs:date("1990-01-01")) then
    $local:myVar + 1
  else
    22
};

$local:myVar
