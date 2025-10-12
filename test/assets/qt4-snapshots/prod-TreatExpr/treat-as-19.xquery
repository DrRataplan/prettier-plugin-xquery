let $var := xs:float(-100)
return fn:abs($var cast as xs:double treat as xs:double)
