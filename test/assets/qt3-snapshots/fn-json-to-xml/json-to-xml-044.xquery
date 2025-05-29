import schema  "http://www.w3.org/2005/xpath-functions";

for $i in 1 to 4
let $validate := $i mod 2 eq 1
let $options := map {"validate": $validate}
return (fn:json-to-xml("{}", $options)/* instance of schema-element(fn:map))
