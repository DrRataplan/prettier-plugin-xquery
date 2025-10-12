declare variable $n external;

for $x in -2 to +2
where ($n - $x)
return $x
