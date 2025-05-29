boolean(
  replace(
    if (exists((1 to 10)[. mod 2 = 0])) then
      "blah"
    else (
    ),
    "a",
    "e",
    "m"
  )
)
