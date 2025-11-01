xs:hexBinary(
  bin:join(
    (xs:base64Binary(xs:hexBinary("FF")), xs:base64Binary(xs:hexBinary("FF")))
  )
)
