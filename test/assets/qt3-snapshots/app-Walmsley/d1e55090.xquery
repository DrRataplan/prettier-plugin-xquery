declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(map:entry(1, "first"), map {1: "first"})
