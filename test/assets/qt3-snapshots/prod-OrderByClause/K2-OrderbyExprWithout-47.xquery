let $numbers :=
  (1, 2, 1.3, 3e3, xs:double("NaN"), xs:double("-INF"), xs:double("INF"))
return (
    for $i in $numbers
    stable order by $i empty least
    return $i,
    "SEP",
    for $i in $numbers
    order by $i empty greatest
    return $i
  )
