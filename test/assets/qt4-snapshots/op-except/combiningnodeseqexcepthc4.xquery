for $h in (count((//hours) except (//hours)))
order by number($h)
return $h
