let $without_tz := xs:dateTime("2015-04-08T01:30:00"),
  $with_tz := adjust-dateTime-to-timezone($without_tz, implicit-timezone()),
  $keys := (xs:dateTime("2015-04-08T02:30:00"), $without_tz, $with_tz)
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($keys[$i], $keys[$j])
