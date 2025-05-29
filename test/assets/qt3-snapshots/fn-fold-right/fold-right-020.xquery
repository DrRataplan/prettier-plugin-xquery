fold-right(
  1 to 10,
  (),
  function ($a, $b) {
    if (empty($b)) then
      $a
    else if ($a gt $b) then
      $b
    else
      $a
  }
)
