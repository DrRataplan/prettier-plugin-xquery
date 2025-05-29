fn:avg(
  (
    fn:seconds-from-time(xs:time("01:10:20Z")),
    fn:seconds-from-time(xs:time("01:20:30Z"))
  )
)
