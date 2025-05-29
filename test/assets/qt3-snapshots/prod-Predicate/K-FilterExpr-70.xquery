deep-equal(
  (1, 2),
  (0, 1, 2)[if (. eq 1) then
    2
  else
    3]
)
