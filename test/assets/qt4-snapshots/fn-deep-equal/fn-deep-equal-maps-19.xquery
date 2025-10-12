fn:deep-equal(
  (map {1: "a", 2: "b"}, map {1: "x", 2: "y"}),
  (map {2: "b", 1: "a"}, map {2: "y", 1: "z"})
)
