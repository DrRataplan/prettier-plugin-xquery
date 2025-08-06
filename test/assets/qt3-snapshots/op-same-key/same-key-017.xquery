let $date := adjust-date-to-timezone(xs:date("2015-10-10"), implicit-timezone())
let $keys := (
  $date cast as xs:gYearMonth,
  xs:gYearMonth("2015-10"),
  xs:gYearMonth("2015-11")
)
return [
  map:merge($keys!map:entry(., position())),
  distinct-values($keys),
  for $k in $keys
  group by $k
  return $k
]
