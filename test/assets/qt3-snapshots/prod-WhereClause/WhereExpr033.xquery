declare variable $n external := 0;

for $x in -2 to +2
where ($n - $x)
return $x
