count(
  (
    for $fo in (1, 2, 3)
    where xs:time("08:08:23Z")
    return $fo
  )
) eq
  3
