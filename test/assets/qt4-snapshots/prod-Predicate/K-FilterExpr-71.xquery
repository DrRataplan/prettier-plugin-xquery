deep-equal(
  (0, 1, 2),
  (0, 1, 2)[if (. eq 8) then
    "str"
  else
    position()]
)
