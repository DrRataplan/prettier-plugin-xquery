let $r := fn:sort((17, 17))
return (count($r) eq 2 and $r[1] eq 17 and $r[2] eq 17)
