declare copy-namespaces preserve ,  no-inherit;

declare namespace foo = "http://example.org";

let $existingElement := <existingElement
  xmlns="http://www.existingnamespace.com"
>{ "Existing Content" }</existingElement>
let $new := <foo:newElement xmlns="http://www.mynamespace.com">
  { $existingElement }
</foo:newElement>
return in-scope-prefixes(exactly-one($new/child::node()))
