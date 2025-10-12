serialize(
  (map {1: true(), 2: false()}, map {8: 80, 9: 90}),
  map {
    "method": "adaptive",
    "item-separator": ";",
    "indent": false(),
    "omit-xml-declaration": true()
  }
)
