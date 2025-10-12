fn:avg(
  (
    fn:hours-from-duration(xs:dayTimeDuration("P23DT10H")),
    fn:hours-from-duration(xs:dayTimeDuration("P21DT08H"))
  )
)
