declare copy-namespaces preserve ,  inherit;

declare variable $existingElement := <existingElement>{
  "Existing Content"
}</existingElement>;

declare variable $new := <newElement>{
  $existingElement
}</newElement>;

for $var in (in-scope-prefixes(exactly-one($new/existingElement)))
return $var
