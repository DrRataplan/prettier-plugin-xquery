deep-equal(
  (1, 2, 3, remove((current-time(), 4), 1))[position() >= 1],
  (1, 2, 3, 4)
)
