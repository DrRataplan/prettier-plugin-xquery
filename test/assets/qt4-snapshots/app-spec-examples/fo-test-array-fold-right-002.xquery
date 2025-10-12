array:fold-right(
  [true(), true(), false()],
  false(),
  function ($x, $y) { $x or $y }
)
