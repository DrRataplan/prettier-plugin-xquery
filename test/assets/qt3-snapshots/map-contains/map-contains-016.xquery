map:contains(
  map:merge(
    (
      (
        for $i in 1 to 1000
        return map:entry($i, $i * $i)
      ),
      (
        for $i in 2000 to 3000
        return map:entry($i, $i + 30)
      ),
      (
        for $i in 2500 to 3500
        return map:entry($i, $i + 30)
      )
    )
  ),
  3260
)
