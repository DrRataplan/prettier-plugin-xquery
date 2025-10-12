let $var := <?format role="output" ?>
return fn:count(fn:namespace-uri(fn:root($var)))
