(
  xs:anyURI("example.com/"),
  1,
  QName("example.com", "ncname"),
  false(),
  xs:hexBinary("FF")
) =
  (
    xs:anyURI("example.com/NOT"),
    0,
    QName("example.com", "p:ncname"),
    true(),
    xs:hexBinary("EF")
  )
