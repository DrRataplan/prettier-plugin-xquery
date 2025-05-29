let $nodes :=
  (<a lang='de' xml:lang='de'>Insel</a>, <a lang='en' xml:lang='en'>Island</a>)
let $ids :=
  for $n in $nodes
  return generate-id($n)
return count($nodes) = count(distinct-values($ids))
