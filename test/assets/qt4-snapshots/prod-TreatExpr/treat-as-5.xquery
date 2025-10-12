let $var := xs:decimal(100)
return fn:abs($var cast as xs:integer treat as xs:integer)
