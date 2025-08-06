let $var := 100
return (
  xs:decimal($var) treat as xs:decimal,
  xs:double($var) treat as xs:double,
  xs:float($var) treat as xs:float,
  $var treat as xs:integer
)
