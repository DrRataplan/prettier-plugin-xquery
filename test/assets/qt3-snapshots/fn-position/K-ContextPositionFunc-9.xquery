deep-equal(
  (1, 2, 3, remove((current-time(), 4), 1))[0 != position()],
  (1, 2, 3, 4)
)
