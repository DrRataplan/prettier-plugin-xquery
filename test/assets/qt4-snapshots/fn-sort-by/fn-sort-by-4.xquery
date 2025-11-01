let $r := fn:sort-by((1), ())
return (count($r) eq 1 and $r[1] eq 1)
