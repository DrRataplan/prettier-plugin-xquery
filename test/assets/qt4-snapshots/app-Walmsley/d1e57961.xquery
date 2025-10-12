declare variable $map1 := map {1: "first", 2: "second"};

map:for-each($map1, function ($k, $v) { concat($k, $v) })
