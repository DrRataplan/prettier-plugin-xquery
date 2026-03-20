for $node in $root//abc:*
let $localName := fn:local-name($node),
  $newQName := fn:concat("xyz:", $localName)
return (
  rename node $node as fn:QName("http://xyz/ns", $newQName),
  for $attr in $node/@abc:*
  let $attrLocalName := fn:local-name($attr),
    $attrNewQName := fn:concat("xyz:", $attrLocalName)
  return rename node $attr as fn:QName("http://xyz/ns", $attrNewQName)
)
