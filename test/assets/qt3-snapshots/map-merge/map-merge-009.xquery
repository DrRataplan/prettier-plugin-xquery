let $foo :=
  map:merge(
    for $i in 1 to 20
    return map:entry($i, $i * $i)
  ),
  $bar := map:entry(8, 63),
  $foobar := map:merge(($foo, $bar))
return ($foobar, $bar, $foo)[2]
