for $x in //employee
let $key := $x/@gender
group by $key
return concat($key, ":", avg($x/hours))
