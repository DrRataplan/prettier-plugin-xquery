let $keys := (
  xs:decimal("1.00000000000000001"),
  xs:decimal("1.00000000000000002"),
  xs:double("1.0")
)
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($keys[$i], $keys[$j])
