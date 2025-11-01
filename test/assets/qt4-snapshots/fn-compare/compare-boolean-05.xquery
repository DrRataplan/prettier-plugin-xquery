let $v := current-date()!year-from-date(.)!(. > 1000, . < 1000)
for $a in $v
for $b in $v
return compare($a, $b)
