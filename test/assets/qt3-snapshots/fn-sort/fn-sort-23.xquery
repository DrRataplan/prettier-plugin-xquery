let $input :=
  (
    xs:float("1.0"),
    xs:decimal("1.0000000000100000000001"),
    xs:decimal("1.0000000000100000000002"),
    xs:double("1.00000000001"),
    xs:float("1.00000000001"),
    xs:decimal("1.00000000001000000000011"),
    xs:decimal("1.00000000001000000000012"),
    xs:decimal("1.00000000001"),
    xs:double("1.0000000000100000000001")
  ),
  $more := ($input, reverse($input), $input),
  $sorted := trace(sort($more))
return empty(
    for $i in 1 to count($sorted), $j in $i + 1 to count($sorted)
    return "x"[$sorted[$i] gt $sorted[$j]]
  )
