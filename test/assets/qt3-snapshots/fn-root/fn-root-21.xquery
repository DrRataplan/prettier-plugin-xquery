let $var := <!-- An Element Node -->
return fn:count(fn:namespace-uri(fn:root($var)))
