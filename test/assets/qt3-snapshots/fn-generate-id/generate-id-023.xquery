let $nodes := (text { "" }, text { "" }, text { "" }, text { "" })
let $ids :=
  for $n in $nodes
  return generate-id($n)
return every $id in $ids satisfies matches($id, "^[A-Za-z][A-Za-z0-9]*$")
