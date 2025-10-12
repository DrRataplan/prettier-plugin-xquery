fn:avg(
  (
    fn:seconds-from-duration(xs:dayTimeDuration("P23DT10H20M30S")),
    fn:seconds-from-duration(xs:dayTimeDuration("P21DT10H10M32S"))
  )
)
