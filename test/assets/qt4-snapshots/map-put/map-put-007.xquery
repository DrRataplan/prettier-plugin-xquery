let $foo := map:entry("foo", 3), $foobar := map:put($foo, "foo", 4)
return ($foobar, $foo)[2]
