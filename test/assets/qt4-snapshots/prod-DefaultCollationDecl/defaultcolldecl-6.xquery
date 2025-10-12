declare default collation "http://www.w3.org/2013/collation/UCA?strength=secondary;fallback=no";

string-join(
  for $x in ("abc", "aB", "Abcd")
  order by $x
  return $x,
  " "
)
