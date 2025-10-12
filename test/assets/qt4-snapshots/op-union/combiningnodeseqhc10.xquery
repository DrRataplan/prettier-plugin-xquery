for $h in (($works//hours) union ($staff//grade[xs:integer(.) gt 12]))
order by number($h)
return $h
