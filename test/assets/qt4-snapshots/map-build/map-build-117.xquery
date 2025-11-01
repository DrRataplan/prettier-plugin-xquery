let $data := parse-xml(
  "<doc><a p='1'>one</a><a p='2'>two</a><a p='3'>three</a></doc>"
)
let $map := map:build($data//a)
return $map?two/string(@p)
