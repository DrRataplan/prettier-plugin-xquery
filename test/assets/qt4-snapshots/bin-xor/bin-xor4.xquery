xs:hexBinary(
  bin:xor(
    xs:base64Binary(xs:hexBinary("80")),
    xs:base64Binary(xs:hexBinary("7F"))
  )
)
