xs:hexBinary(
  bin:insert-before(
    xs:base64Binary(xs:hexBinary("12")),
    0,
    xs:base64Binary(xs:hexBinary("3456"))
  )
)
