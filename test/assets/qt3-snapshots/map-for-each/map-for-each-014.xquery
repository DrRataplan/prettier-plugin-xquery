map:for-each(
  map:merge(
    for $n in 1 to 500000
    return map:entry($n, $n + 1)
  ),
  function ($k, $v) {
    $k
  }
)
