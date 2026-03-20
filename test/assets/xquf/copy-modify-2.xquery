let $oldx := /a/b/x
return copy $newx := $oldx modify (
  rename node $newx as "newx", replace value of node $newx with $newx * 2
) return ($oldx, $newx)
