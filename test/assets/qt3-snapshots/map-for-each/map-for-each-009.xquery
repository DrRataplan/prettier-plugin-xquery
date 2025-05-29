map:for-each(map:remove(map {"a": 1, "b": 2}, "b"), function ($k, $v) {
    $k
  })
