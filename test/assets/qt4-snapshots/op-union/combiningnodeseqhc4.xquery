for $h in ((<hours>0</hours>, <hours>40</hours>) union (//hours))
order by number($h)
return $h
