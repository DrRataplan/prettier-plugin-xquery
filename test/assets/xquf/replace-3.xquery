for $p in /inventory/part
let $deltap := $changes/part[partno eq $p/partno]
return replace value of node $p/quantity with $p/quantity + $deltap/quantity
