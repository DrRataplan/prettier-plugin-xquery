declare base-uri "http://www.example.com/";

let $i := <e attr="foo" xml:base="foo/../xml"> </e>
return base-uri($i/@xml:base)
