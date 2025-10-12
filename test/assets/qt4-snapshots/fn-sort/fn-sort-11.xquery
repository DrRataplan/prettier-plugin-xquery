let $r := fn:sort((4, 4, 4))
return (count($r) eq 3 and $r[1] eq 4 and $r[2] eq 4 and $r[3] eq 4)
