let $parser := invisible-xml("S=A. A='a'.")
let $result := $parser("b")
return $result/*/@*:state = "failed"
