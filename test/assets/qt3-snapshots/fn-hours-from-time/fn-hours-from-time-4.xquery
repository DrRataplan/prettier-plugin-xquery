fn:hours-from-time(
  fn:adjust-time-to-timezone(
    xs:time("01:23:00+05:00"),
    xs:dayTimeDuration("PT0H")
  )
)
