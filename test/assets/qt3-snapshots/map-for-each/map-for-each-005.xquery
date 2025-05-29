map:for-each(
  map:merge((map:entry("a", "1"), map:entry("b", 2))),
  function ($k, $v) {
    $k
  }
)
