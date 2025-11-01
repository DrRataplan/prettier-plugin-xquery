deep-equal(
  xs:anyURI("bed time"),
  xs:anyURI(" bed  time"),
  map {"whitespace": "normalize"}
)
