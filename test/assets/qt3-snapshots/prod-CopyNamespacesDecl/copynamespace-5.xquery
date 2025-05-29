declare copy-namespaces preserve ,  no-inherit;

declare namespace foo = "http://example.org";

let $existingElement :=
  <foo:existingElement xmlns="http://www.existingnamespace.com">{
    "Existing Content"
  }</foo:existingElement>
let $new := <foo:newElement xmlns = "http://www.mynamespace.com">{
    $existingElement
  }</foo:newElement>
for $var in (in-scope-prefixes($new//child::*))
order by exactly-one($var) ascending
return $var
