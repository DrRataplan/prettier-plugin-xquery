declare default order empty greatest;

for $i in (1, 4, 0 div 0E0, 0 div 0E0, 7)
order by $i ascending
return $i
