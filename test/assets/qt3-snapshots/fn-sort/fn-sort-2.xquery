let $r := fn:sort((1, 2, 3))
return (count($r) eq 3 and $r[1] eq 1 and $r[2] eq 2 and $r[3] eq 3)
