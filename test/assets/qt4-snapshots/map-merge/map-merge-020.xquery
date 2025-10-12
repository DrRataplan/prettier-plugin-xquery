deep-equal(
  map:merge(
    for $i in 1 to 1000
    return map:entry($i, $i + 1)
  ),
  map:merge(
    for $i in 2 to 1001
    return map:entry($i, $i + 1)
  )
)
