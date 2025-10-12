declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(map:remove($map1, 2), map {1: "first"})
