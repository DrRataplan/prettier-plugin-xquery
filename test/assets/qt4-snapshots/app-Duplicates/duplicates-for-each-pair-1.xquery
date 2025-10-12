let $seq := (1 to 1000, 1, 1)
let $sorted := sort($seq)
return for-each-pair(
    $sorted,
    tail($sorted),
    function ($x, $y) {
      if ($x eq $y) then
        $x
      else (
      )
    }
  )
    => distinct-values()
