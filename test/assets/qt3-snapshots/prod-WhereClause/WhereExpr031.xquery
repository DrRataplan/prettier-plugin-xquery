declare variable $n external;

for $x in 1 to $n
where not($x = 5)
return concat("[", $x, "]")
