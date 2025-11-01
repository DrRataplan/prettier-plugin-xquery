op("eq")(xs:time("12:00:00+01:00"), xs:time("12:00:00")) =
  (implicit-timezone() = xs:dayTimeDuration("PT1H"))
