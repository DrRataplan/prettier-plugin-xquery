serialize(
  (parse-xml("<a/>"), parse-xml("<b/>")),
  map {
    "method": "adaptive",
    "item-separator": ";",
    "indent": false(),
    "omit-xml-declaration": true()
  }
)
