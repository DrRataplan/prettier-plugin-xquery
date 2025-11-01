xs:hexBinary(
  bin:insert-before(
    xs:base64Binary(xs:hexBinary("12")),
    1,
    xs:base64Binary(xs:hexBinary("3456"))
  )
)
