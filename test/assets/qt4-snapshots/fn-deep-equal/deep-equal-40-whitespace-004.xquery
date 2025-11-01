deep-equal(
  xs:untypedAtomic("bed time"),
  xs:untypedAtomic(" bed  time"),
  map {"whitespace": "normalize"}
)
