for $test as xs:anyAtomicType in
  (
    xs:boolean("true"),
    xs:base64Binary("abcd"),
    xs:hexBinary("1234"),
    xs:float("5.7"),
    xs:double("7.5"),
    xs:anyURI("http://foo")
  )
return $test
