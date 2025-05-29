map:for-each(
  map:merge((map:entry("a", 1), map:entry("a", 2))),
  function ($k, $v) {
    $k
  }
)
