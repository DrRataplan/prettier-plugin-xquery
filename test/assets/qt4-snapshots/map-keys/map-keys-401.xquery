map:keys(
  map:merge(
    for $n in 1 to 1000
    return map:entry($n, $n + 1)
  )
)
