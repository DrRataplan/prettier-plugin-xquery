deep-equal(
  json-doc("product.json"),
  map {
    "number": xs:double(557),
    "name": "Fleece Pullover",
    "colorChoices": ["navy", "black"],
    "is-current": true(),
    "other": ()
  }
)
