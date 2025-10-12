declare base-uri "http://example.org";

let $var := <anElement>With some contexnt</anElement>
return fn:string(($var)/base-uri())
