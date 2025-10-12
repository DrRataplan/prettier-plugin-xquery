for $value in
  fn:distinct-values(
    (
      xs:dayTimeDuration("P0D"),
      xs:yearMonthDuration("P0Y"),
      xs:duration("P0Y"),
      xs:duration("P0Y"),
      xs:yearMonthDuration("P0Y"),
      xs:dayTimeDuration("P0D"),
      xs:dayTimeDuration("P1D"),
      xs:yearMonthDuration("P1Y"),
      xs:duration("P1Y")
    )
  )
order by string($value)
return $value
