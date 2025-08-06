let $ordDoc := (/)
return (
  max((2, 1, 5, 4, 3)),
  max(("a", "b", "c")),
  max(2),
  max($ordDoc//item/string(@dept))
)
