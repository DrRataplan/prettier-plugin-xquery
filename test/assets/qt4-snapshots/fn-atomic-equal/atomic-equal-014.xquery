let $without_tz := xs:date("2015-04-08"),
  $with_tz := adjust-date-to-timezone($without_tz, implicit-timezone()),
  $keys := (xs:date("2015-04-09"), $without_tz, $with_tz)
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($keys[$i], $keys[$j])
