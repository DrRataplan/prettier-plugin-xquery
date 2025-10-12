fn:avg(
  (
    fn:month-from-dateTime(xs:dateTime("1996-12-31T12:00:00Z")),
    fn:month-from-dateTime(xs:dateTime("2000-10-31T12:00:00Z"))
  )
)
