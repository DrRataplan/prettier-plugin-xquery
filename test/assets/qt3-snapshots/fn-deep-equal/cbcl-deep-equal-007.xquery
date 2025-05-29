deep-equal(xs:gMonth("--12+03:00"), xs:gMonth("--12")) eq
  (implicit-timezone() eq xs:dayTimeDuration("PT3H"))
