declare copy-namespaces preserve ,  inherit;

declare variable $existingElement := <existingElement
  xmlns:existingNamespace="http://www.existingnamespace.com"
>{ "Existing Content" }</existingElement>;

declare variable $new := <newElement
  xmlns:existingNamespace="http://www.mynamespace.com"
>{ $existingElement }</newElement>;

for $var in (in-scope-prefixes($new/existingElement))
order by exactly-one($var) ascending
return $var
