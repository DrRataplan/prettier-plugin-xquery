let $var := text { "A text node" }
return fn:count(fn:namespace-uri(fn:root($var)))
