map:merge(
  map:for-each(
    map {"a": 1, "b": 2},
    function ($k, $v) { map:entry($k, $v + 1) }
  )
)
