let $z := (1 to 10)[. mod 2 = 0]
return subsequence(
    for $x in $z
    return floor($x),
    2,
    4
  )
