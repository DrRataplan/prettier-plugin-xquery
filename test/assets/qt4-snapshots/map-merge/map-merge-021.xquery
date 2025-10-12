deep-equal(
  map:merge(
    for $i in 1 to 1000
    return map:entry($i, $i + 1)
  ),
  map:merge(
    (
      (
        for $i in 1 to 1000
        return map:entry($i, $i + 1)
      ),
      map:entry(400, 402)
    ),
    map {"duplicates": "use-last"}
  )
)
