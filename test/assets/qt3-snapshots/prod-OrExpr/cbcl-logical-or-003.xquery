declare function local:factorial ($n as xs:integer) as xs:integer {
  if ($n le 1) then
    1
  else
    $n * local:factorial($n - 1)
};

declare function local:is-divisible ($n as xs:integer, $d as xs:integer) {
  $n mod $d eq 0
};

not(local:is-divisible(local:factorial(5), 3)) or
  not(local:is-divisible(local:factorial(5), 2))
