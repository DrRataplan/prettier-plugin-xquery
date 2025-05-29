declare function local:times-table ($n as xs:integer) as xs:integer* {
  for $x in 1 to 12
  return $x * $n
};

(some $x in local:times-table(15) satisfies ($x mod 2 eq 0)) or
  (some $y in local:times-table(15) satisfies ($y mod 3 eq 0))
