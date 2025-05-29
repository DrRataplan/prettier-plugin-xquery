let $without_tz := xs:time("01:30:00")
let $with_tz := adjust-time-to-timezone($without_tz, implicit-timezone())
let $keys := (xs:time("02:30:00"), $without_tz, $with_tz)
return [map:merge($keys!map:entry(., position())), distinct-values($keys),
  for $k in $keys
  group by $k
  return $k]
