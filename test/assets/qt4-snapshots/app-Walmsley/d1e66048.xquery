declare variable $map1 := map {1: "first", 2: "second"};

declare variable $map2 := map {1: "ONE", "abc": "def"};

declare variable $map3 := map {"1": "first", "2": "second"};

deep-equal(
  map:merge(($map1, $map2, $map3)),
  map {1: "ONE", 2: "second", "abc": "def", "1": "first", "2": "second"}
)
