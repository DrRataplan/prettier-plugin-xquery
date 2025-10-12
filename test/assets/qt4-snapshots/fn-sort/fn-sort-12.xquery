let $r := fn:sort((17, 14, 5))
return (count($r) eq 3 and $r[1] eq 5 and $r[2] eq 14 and $r[3] eq 17)
