deep-equal(
  map:remove(map {"a": 1, "b": (2, 3), "c": 1 to 5}, ("a", "c")),
  map:entry("b", (2, 3))
)
