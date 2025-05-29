declare base-uri "http://www.example.com";

let $i := <e attr="foo"></e>
return base-uri($i/@attr)
