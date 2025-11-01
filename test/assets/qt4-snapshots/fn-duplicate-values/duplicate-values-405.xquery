duplicate-values(
  (
    xs:time("12:00:00Z"),
    xs:time("13:00:00+01:00"),
    xs:time("14:00:00+02:00"),
    xs:time("15:00:00+03:00")
  )
)
  => string()
