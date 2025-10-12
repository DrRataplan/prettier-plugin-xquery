declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(
  map:merge(($map1, map:entry(3, "third"))),
  map {1: "first", 2: "second", 3: "third"}
)
