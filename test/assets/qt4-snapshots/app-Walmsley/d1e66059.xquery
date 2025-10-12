declare variable $map1 := map {1: "first", 2: "second"};

declare variable $map2 := map {1: "ONE", "abc": "def"};

declare variable $map3 := map {"1": "first", "2": "second"};

deep-equal(
  map:merge(($map1, map {3: "third"})),
  map {1: "first", 2: "second", 3: "third"}
)
