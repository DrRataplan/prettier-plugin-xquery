map:merge(
  for $i in 1 to 20
  return map:entry($i, $i * $i)
)
