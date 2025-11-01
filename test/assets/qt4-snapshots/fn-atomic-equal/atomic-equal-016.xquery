let $date := adjust-date-to-timezone(
    xs:date("2015-10-10"),
    implicit-timezone()
  ),
  $keys := ($date cast as xs:gYear, xs:gYear("2015"), xs:gYear("2014"))
return every
    $i in
    1 to 3, $j in
    1 to 3 satisfies
    ($i eq $j) eq atomic-equal($keys[$i], $keys[$j])
