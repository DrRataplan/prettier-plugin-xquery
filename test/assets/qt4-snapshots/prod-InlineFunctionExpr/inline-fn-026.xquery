let $weirdo := function ($x, $f) {
  if ($x = 0) then
    0
  else
    $f($x - 1, $f)
}
return $weirdo(12, $weirdo)
