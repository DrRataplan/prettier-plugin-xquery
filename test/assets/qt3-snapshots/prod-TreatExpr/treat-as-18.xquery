let $var := xs:double(-100)
return fn:abs($var cast as xs:float treat as xs:float)
