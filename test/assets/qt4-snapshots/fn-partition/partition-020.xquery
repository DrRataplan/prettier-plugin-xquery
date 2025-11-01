partition(
  (1, 2, 3, 6, 7, 9, 10),
  function ($seq, $new) { not($new = $seq[last()] + 1) }
)
