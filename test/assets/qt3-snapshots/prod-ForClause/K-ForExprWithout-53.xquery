declare variable $my := 3;

(
  for $i in 1
  return $my
) eq
  3
