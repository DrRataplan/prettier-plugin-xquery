deep-equal(
  map:put(
    map:merge(
      for $i in 1 to 1000
      return map:entry($i, $i + 1)
    ),
    1001,
    1002
  ),
  map:merge(
    for $i in 1 to 1001
    return map:entry($i, $i + 1)
  )
)
