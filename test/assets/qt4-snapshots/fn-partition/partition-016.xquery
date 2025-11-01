partition(
  ("Anita", "Anne", "Barbara", "Catherine", "Christine"),
  function ($x, $y) { substring($x[last()], 1, 1) ne substring($y, 1, 1) }
)
