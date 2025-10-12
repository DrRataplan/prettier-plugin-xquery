let $var := xs:double(-100)
return fn:abs($var cast as xs:decimal treat as xs:decimal)
