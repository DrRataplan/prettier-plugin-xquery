(
  insert-before((1, current-time(), 3), 10, (4, 5, 6))[last() -
    3] treat as xs:integer
) eq
  3
