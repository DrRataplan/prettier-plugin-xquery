let $r := fn:sort((1, -2, 5, 10, -10, 10, 8), (), fn:abs#1)
return (
  count($r) eq 7 and
    $r[1] eq 1 and
    $r[2] eq -2 and
    $r[3] eq 5 and
    $r[4] eq 8 and
    $r[5] eq 10 and
    $r[6] eq -10 and
    $r[7] eq 10
)
