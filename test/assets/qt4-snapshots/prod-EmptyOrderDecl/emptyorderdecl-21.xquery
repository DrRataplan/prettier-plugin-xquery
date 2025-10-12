declare default order empty least;

for $i in (1, 4, 0 div 0E0, 0 div 0E0, 7)
order by $i descending
return $i
