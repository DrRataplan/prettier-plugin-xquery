declare function local:times-table ($n as xs:integer) as xs:integer* {
  for $x in 1 to 12
  return $x * $n
};

(every $x in local:times-table(15) satisfies ($x mod 3 eq 0)) and
  (every $y in local:times-table(15) satisfies ($y mod 5 eq 0))
