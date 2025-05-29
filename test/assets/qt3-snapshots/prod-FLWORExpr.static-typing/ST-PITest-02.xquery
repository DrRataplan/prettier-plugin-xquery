for $pi in //processing-instruction(nonexistent)
let $pi2 as processing-instruction(filesystem) := $pi
return $pi2
