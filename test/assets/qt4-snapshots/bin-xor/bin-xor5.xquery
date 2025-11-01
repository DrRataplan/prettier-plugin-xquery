xs:hexBinary(
  bin:xor(
    xs:base64Binary(xs:hexBinary("1234")),
    xs:base64Binary(xs:hexBinary("4321"))
  )
)
