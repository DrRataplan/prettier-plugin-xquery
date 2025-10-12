for $x in //employee
let $key := $x/hours[1]
group by $key
where count($x) gt 2
return concat($key, ":", count($x))
