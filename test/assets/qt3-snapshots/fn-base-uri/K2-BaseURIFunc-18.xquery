declare base-uri "http://www.example.com";

let $i := <e attr="foo" />
return base-uri($i/@attr)
