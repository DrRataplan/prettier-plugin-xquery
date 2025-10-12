declare default order empty least;

for $i in (1, 4, 3, 0 div 0E0, 7)
order by $i ascending empty least
return $i
