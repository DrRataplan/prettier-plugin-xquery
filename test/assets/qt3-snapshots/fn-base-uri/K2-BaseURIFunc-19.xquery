declare base-uri "http://www.example.com/";

let $i := <e attr="foo" xml:base="foo/../xml" />
return base-uri($i/@attr)
