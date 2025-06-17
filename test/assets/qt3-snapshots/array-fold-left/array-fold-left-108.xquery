array:fold-left(
  [true(), true(), false()],
  false(),
  function ($x, $y) { $x or $y }
)
