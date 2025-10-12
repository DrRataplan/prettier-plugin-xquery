for $x in //employee
let $key := $x/hours
group by $key
return <group avHours="{ avg($x/hours) }" hours="{ $key }" />
