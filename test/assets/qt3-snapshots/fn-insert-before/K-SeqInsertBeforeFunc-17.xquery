(
  insert-before(
    (1, current-time(), 3),
    1,
    (4, 5, 6)
  )[last()] treat as xs:integer
) eq
  3
