xs:hexBinary(
  bin:insert-before(
    xs:base64Binary(xs:hexBinary("1234")),
    2,
    xs:base64Binary(xs:hexBinary("56"))
  )
)
