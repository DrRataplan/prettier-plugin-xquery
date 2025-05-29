declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(map:put($map1, 1, "ONE"), map {1: "ONE", 2: "second"})
