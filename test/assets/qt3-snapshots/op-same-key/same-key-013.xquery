let $without_tz := xs:dateTime("2015-04-08T01:30:00")
let $with_tz := adjust-dateTime-to-timezone($without_tz, implicit-timezone())
let $keys := (xs:dateTime("2015-04-08T02:30:00"), $without_tz, $with_tz)
return [map:merge($keys!map:entry(., position())), distinct-values($keys),
  for $k in $keys
  group by $k
  return $k]
