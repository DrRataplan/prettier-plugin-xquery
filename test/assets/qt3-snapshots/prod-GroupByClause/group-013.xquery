for $x in 1 to 10, $y in 1 to 4
let $org_y := $y
group by $y, $y := $x mod 2
return <grp even="{ $y }" y="{ $org_y[1] }">{ $x }</grp>
