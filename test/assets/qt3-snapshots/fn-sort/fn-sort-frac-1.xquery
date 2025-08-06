let $r := fn:sort((-4.2, 14.25, 5.99, 6, 14.24, 0))
return (
  count($r) eq 6 and
    $r[1] eq -4.2 and
    $r[2] eq 0 and
    $r[3] eq 5.99 and
    $r[4] eq 6 and
    $r[5] eq 14.24 and
    $r[6] eq 14.25
)
