ordered{
  if (some $x in (1, 2, 3), $y in (2, 3, 4) satisfies $x + $y = 4) then (
    0, 1, 2, 3, 4
  ) else (
    "a", "b"
  )
}
