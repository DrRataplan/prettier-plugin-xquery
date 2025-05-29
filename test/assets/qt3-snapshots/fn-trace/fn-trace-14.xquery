fn:trace(
  (
    for $var in (1.1, 2.2, 3.3, 4.4, 5.5)
    return xs:integer($var)
  ),
  "The Value of 'for $var in (1.1,2.2,3.3,4.4,5.5) return xs:float($var)' is: "
)
