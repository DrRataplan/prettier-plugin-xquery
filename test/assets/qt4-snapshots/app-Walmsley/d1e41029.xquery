deep-equal(
  map:merge(
    for $p in doc("catalog.xml")//product
    return map:entry(string($p/number), string($p/name))
  ),
  map {
    "557": "Fleece Pullover",
    "563": "Floppy Sun Hat",
    "443": "Deluxe Travel Bag",
    "784": "Cotton Dress Shirt"
  }
)
