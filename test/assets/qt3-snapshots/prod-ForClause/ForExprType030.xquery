for $test as xs:normalizedString in
  (
    xs:language("en-US"),
    xs:NCName("foobar"),
    xs:NMTOKEN("token1"),
    xs:ENTITY("entity1")
  )
return $test
