deep-equal(
  (1, 2, 3, remove((current-time(), 4), 1))[position() > 0],
  (1, 2, 3, 4)
)
