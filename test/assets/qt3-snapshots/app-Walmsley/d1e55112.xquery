declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(
  map:merge((map:entry(1, "first"), map:entry(2, "second"))),
  map {1: "first", 2: "second"}
)
