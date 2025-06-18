let $nodes := (
  <a lang='de' xml:lang='de'>Insel</a>, <a lang='en' xml:lang='en'>Island</a>
)
let $ids :=
  for $n in $nodes
  return generate-id($n)
return every $id in $ids satisfies matches($id, "^[A-Za-z][A-Za-z0-9]*$")
