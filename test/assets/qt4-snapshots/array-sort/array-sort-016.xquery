array:sort(
  [[1, 0], [1, 1], [0, 1], [0, 0], [], [1], [0, 0, 1]],
  (),
  function ($x) { array:size(array:filter($x, function ($y) { $y eq 1 })) }
)
