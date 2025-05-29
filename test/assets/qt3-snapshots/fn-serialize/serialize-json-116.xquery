serialize(
  [map {"abc": map {"abc": 1}}, map {"def": map {"def": 2}}, map {
    "ghi": map {"ghi": 3}
  }],
  map {"method": "json", "indent": false()}
)
