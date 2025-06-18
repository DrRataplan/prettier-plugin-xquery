let $foo := map:merge(
    for $i in 1 to 20
    return map:entry($i, $i * $i)
  ),
  $foobar := map:put($foo, 8, 63)
return ($foobar, $foo)[2]
