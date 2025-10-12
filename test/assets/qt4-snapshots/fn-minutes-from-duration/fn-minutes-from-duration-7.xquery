fn:avg(
  (
    fn:minutes-from-duration(xs:dayTimeDuration("P23DT10H20M")),
    fn:minutes-from-duration(xs:dayTimeDuration("P21DT10H10M"))
  )
)
