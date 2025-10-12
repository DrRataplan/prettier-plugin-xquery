for $h in ((//hours[xs:integer(.) le 20]) | (//hours[xs:integer(.) gt 20]))
order by number($h)
return $h
