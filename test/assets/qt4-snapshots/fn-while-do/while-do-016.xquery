let $i := 3936256
return while-do(
    $i,
    function ($x) { abs($x * $x - $i) >= 0.0000000001 },
    function ($x) { ($x + $i div $x) div 2 }
  )
    => round()
