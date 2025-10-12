let $r := fn:sort((-42, 14, 5, 6, 14, 0))
return (
    count($r) eq 6 and
      $r[1] eq -42 and
      $r[2] eq 0 and
      $r[3] eq 5 and
      $r[4] eq 6 and
      $r[5] eq 14 and
      $r[6] eq 14
  )
