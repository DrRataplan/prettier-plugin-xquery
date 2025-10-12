let $r := fn:sort((1))
return (count($r) eq 1 and $r[1] eq 1)
