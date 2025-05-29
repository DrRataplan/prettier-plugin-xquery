declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(
  map:put($map1, 3, "third"),
  map {1: "first", 2: "second", 3: "third"}
)
