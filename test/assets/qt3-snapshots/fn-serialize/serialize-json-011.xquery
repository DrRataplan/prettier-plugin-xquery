serialize(
  map {QName("", "foo"): 1, "foo": 2},
  map {"method": "json", "allow-duplicate-names": true()}
)
