let $without_tz := xs:time("01:30:00"),
  $with_tz := adjust-time-to-timezone($without_tz, implicit-timezone()),
  $keys := (xs:time("02:30:00"), $without_tz, $with_tz)
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($keys[$i], $keys[$j])
