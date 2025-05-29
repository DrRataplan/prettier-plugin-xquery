adjust-time-to-timezone(
  xs:time("10:00:00-07:00"),
  xs:dayTimeDuration("-PT5H0M")
) eq
  xs:time("12:00:00-05:00")
