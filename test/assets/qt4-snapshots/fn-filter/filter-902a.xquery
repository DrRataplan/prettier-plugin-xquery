filter(
  ("apple", "pear", "apricot", "advocado", "orange"),
  function ($x) {
    if (starts-with($x, "a")) then
      true()
    else (
    )
  }
)
