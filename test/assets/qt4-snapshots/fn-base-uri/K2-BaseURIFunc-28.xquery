declare base-uri "http://example.com/";

let $i := document { () }
return ("Base URI:", base-uri($i), "Document URI:", document-uri($i))
