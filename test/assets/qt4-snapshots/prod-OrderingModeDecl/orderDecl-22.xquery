declare ordering ordered;

for $x in /works//day[1]
return $x/following::day
