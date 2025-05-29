declare function local:factorial ($n as xs:integer) as xs:integer? {
  if ($n lt 1) then (
  ) else if ($n eq 1) then
    1
  else
    $n * local:factorial($n - 1)
};

(every $x in local:factorial(5) satisfies ($x mod 3 eq 0)) or
  (every $y in local:factorial(5) satisfies ($y mod 5 eq 0))
