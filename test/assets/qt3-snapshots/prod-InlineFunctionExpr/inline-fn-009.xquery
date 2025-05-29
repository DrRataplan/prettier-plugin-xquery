let $bonus := 10,
  $outer :=
  function ($x) {
    let $inner := function ($y) {
        $y + $x + $bonus
      }
    return $inner(5)
  }
return $outer(3)
