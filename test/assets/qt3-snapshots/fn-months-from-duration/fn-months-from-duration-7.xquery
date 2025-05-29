fn:avg(
  (
    fn:months-from-duration(xs:yearMonthDuration("P23Y10M")),
    fn:months-from-duration(xs:yearMonthDuration("P21Y10M"))
  )
)
