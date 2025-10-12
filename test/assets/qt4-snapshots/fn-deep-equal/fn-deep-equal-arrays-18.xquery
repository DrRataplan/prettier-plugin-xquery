fn:deep-equal(
  ([["a", "b", "d"] => array:put(3, "c")], [], [1]),
  ([["a", "b", "c", "d"] => array:remove(4)], [], [1])
)
