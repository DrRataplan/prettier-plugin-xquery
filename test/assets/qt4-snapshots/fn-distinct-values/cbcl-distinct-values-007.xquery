for $value at $p in
  (
    for $time in
      fn:distinct-values(
        (
          xs:time("12:00:00"),
          xs:time("12:00:00"),
          xs:time("20:00:00"),
          xs:time("01:00:00+12:00"),
          xs:time("02:00:00+13:00")
        )
      )
    order by $time
    return $time
  )
return adjust-time-to-timezone($value, (xs:dayTimeDuration("PT0S")[$p]))
