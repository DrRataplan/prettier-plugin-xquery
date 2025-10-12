deep-equal(
  (2, 2),
  (
    for $foo in (1, 1)
    return 1 + $foo
  )
)
