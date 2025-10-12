fn:fold-left(1 to 5, map {}, function ($map, $n) { map:put($map, $n, $n * 2) })
