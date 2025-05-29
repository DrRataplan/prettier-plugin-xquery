adjust-time-to-timezone(
  xs:time("10:00:00-07:00"),
  xs:dayTimeDuration("-PT10H")
) eq
  xs:time("07:00:00-10:00")
