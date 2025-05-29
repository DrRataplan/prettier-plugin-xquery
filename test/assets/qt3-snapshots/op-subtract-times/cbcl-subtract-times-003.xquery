fn:adjust-time-to-timezone(xs:time("12:00:00")) -
  fn:adjust-time-to-timezone(
    xs:time("08:00:00+05:00"),
    xs:dayTimeDuration("PT1H")
  ) +
  implicit-timezone()
