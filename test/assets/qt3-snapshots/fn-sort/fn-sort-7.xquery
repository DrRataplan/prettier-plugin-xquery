let $r := fn:sort((1, 17))
return (count($r) eq 2 and $r[1] eq 1 and $r[2] eq 17)
