deep-equal(
  map:put(map {"a": 1, "b": 2, "c": (3, 4, 5)}, "d", 6),
  map:put(map {"d": 6, "c": (3, 4, 5), "a": 1}, "b", 2)
)
