deep-equal(
  remove(
    for $var in (current-time(), 2, 3, 4)
    return $var,
    1
  ),
  (2, 3, 4)
)
