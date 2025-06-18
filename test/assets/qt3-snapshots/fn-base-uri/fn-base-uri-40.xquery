declare base-uri "http://example.org";

let $var := <anElement
  xml:base="http://www.examples.com"
>With some content</anElement>
return fn:string(($var)/base-uri())
