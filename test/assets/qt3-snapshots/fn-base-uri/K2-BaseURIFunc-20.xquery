declare base-uri "http://www.example.com/";

let $i := <e xml:base = "foo/../xml" attr="foo"> </e>
return base-uri($i/@xml:base)
