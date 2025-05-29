declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(
  map:put($map1, "abc", "def"),
  map {1: "first", 2: "second", "abc": "def"}
)
