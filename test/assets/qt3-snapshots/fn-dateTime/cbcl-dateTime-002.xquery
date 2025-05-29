fn:index-of(
  ("A", fn:current-dateTime(), "B"),
  fn:dateTime(
    adjust-date-to-timezone(fn:current-date(), xs:dayTimeDuration("PT1H")),
    adjust-time-to-timezone(fn:current-time(), xs:dayTimeDuration("PT2H"))
  )
)
