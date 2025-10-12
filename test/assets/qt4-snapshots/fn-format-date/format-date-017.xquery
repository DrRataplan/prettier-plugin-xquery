string-join(
  for $z in -12 to +12
  return format-date(
      adjust-date-to-timezone($t, $z * xs:dayTimeDuration("PT1H")),
      "[ZZ]"
    ),
  " "
)
