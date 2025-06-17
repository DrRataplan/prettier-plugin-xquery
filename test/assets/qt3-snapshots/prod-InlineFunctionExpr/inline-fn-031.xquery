let $x := function ($a, $b) { $a + $b },
  $y := function ($a, $b) { $a - $b },
  $c := function ($x, $y) { $x = $y }
return $c($x, $y)
