let $r := fn:sort((17, 1))
return (count($r) eq 2 and $r[1] eq 1 and $r[2] eq 17)
