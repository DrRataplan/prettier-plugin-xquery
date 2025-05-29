map:for-each(
  map:remove(map:remove(map {"a": 1, "b": 2}, "b"), "a"),
  function ($k, $v) {
    $k
  }
)
