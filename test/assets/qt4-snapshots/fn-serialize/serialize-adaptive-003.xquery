serialize(
  (parse-xml('<a x="1"/>')/a/@x, parse-xml('<b y="2"/>')/b/@y),
  map {
    "method": "adaptive",
    "item-separator": ";",
    "indent": false(),
    "omit-xml-declaration": true()
  }
)
