declare base-uri "http://example.org";

let $var := <anElement>With some contexnt</anElement>
return fn:string(fn:base-uri($var))
