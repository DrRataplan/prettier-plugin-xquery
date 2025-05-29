import schema  "http://www.w3.org/2005/xpath-functions";

for $i in 1 to 4
let $escape := $i mod 2 eq 1
let $options := map {"escape": $escape}
return fn:json-to-xml('"-\b-\t-\u0001-"', $options)/fn:string/fn:string()
