let $outer := function ($x) {
  let $inner := function ($y) { $y + $x }
  return $inner(5)
}
return $outer(3)
