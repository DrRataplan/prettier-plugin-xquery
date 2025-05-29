deep-equal(
  (
    for $a in 1, $b in $a, $c in $a, $d in $c
    return ($a, $b, $c, $d)
  ),
  (1, 1, 1, 1)
)
