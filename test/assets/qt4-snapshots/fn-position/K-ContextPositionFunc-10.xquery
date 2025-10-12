deep-equal(
  (1, 2, 3, remove((current-time(), 4), 1))[0 ne position()],
  (1, 2, 3, 4)
)
