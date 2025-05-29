string-join(
  for $z in -28 to +28
  return format-date(
      adjust-date-to-timezone($t, $z * xs:dayTimeDuration("PT30M")),
      "[Z]"
    ),
  " "
)
