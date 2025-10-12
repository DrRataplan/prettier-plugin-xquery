let $i := document { <e><a /><a /><a /><b /><b /><a /><a /></e> }
return empty(document-uri($i))
