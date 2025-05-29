sum(
  for $i in 1 to 6
  return let $add := function ($x) {
        $x + $i
      }
    return $add(4)
)
