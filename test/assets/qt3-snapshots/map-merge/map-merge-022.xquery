deep-equal(
  map:merge(
    for $i in 1 to 1000
    return map:entry($i, $i + 1)
  ),
  map:merge(
    for $i in 0 to 1000
    return map:entry($i, $i + 1)
  )
)
