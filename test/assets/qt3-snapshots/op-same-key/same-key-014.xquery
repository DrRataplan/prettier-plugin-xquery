let $without_tz := xs:date("2015-04-08")
let $with_tz := adjust-date-to-timezone($without_tz, implicit-timezone())
let $keys := (xs:date("2015-04-09"), $without_tz, $with_tz)
return [
  map:merge($keys!map:entry(., position())),
  distinct-values($keys),
  for $k in $keys
  group by $k
  return $k
]
