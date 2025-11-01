xs:hexBinary(
  bin:insert-before(
    xs:base64Binary(xs:hexBinary("1234")),
    0,
    xs:base64Binary(xs:hexBinary("56"))
  )
)
