deep-equal(
  parse-xml('<a> <b x=" "/> </a>'),
  parse-xml('<a><b x=""/></a>'),
  map {"whitespace": "strip"}
)
