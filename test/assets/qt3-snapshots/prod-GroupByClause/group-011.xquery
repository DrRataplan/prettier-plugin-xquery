for $a in 1 to 10
let $g := $p mod 2
group by $g
return string-join($p!string(), " ")
