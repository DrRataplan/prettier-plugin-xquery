fn:avg(
  (
    fn:minutes-from-time(xs:time("01:10:00Z")),
    fn:minutes-from-time(xs:time("01:20:00Z"))
  )
)
