string-join(
  for $z in -28 to +28
  return format-time(
      adjust-time-to-timezone($t, $z * xs:dayTimeDuration("PT30M")),
      "[h01][m01][z,5-6]"
    ),
  "; "
)
