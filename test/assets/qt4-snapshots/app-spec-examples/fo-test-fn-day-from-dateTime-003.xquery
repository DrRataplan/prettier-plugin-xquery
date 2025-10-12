fn:day-from-dateTime(
  fn:adjust-dateTime-to-timezone(
    xs:dateTime("1999-12-31T19:20:00-05:00"),
    xs:dayTimeDuration("PT0S")
  )
)
