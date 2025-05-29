let $foo := map:entry("foo", 3),
  $bar := map:entry("foo", 4),
  $foobar := map:merge(($foo, $bar))
return ($foobar, $bar, $foo)[3]
