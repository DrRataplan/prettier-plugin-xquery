let $r := fn:sort-by((3, 2, 1), ())
return (count($r) eq 3 and $r[1] eq 1 and $r[2] eq 2 and $r[3] eq 3)
