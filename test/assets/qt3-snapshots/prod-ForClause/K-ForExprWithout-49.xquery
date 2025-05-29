deep-equal(
  (
    for $fo in trace((1, 2, 3), "msg")
    return $fo
  ),
  (1, 2, 3)
)
