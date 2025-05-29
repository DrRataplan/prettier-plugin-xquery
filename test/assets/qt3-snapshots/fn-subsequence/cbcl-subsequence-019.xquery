let $y :=
  for $x in 1 to 10
  return $x * $x
return subsequence($y, count($y), 3)
