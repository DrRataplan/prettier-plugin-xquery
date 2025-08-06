let $r := fn:sort((1, 4, 6, 5, 3), (), fn:data#1)
return (
  count($r) eq 5 and
    $r[1] eq 1 and
    $r[2] eq 3 and
    $r[3] eq 4 and
    $r[4] eq 5 and
    $r[5] eq 6
)
