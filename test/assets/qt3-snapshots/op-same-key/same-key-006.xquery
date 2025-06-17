let $keys :=
  (
    xs:decimal("1.00000000000000001"),
    xs:decimal("1.00000000000000002"),
    xs:double("1.0")
  )
return [
    map:merge($keys!map:entry(., position())),
    distinct-values($keys),
    for $k in $keys
    group by $k
    return $k
  ]
