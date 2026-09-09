declare variable $n external := 10;

for $x allowing empty in 1 to $n
where $x lt 5
return $x
