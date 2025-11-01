deep-equal(
  parse-xml('<a> <b c="x x x"/> </a>'),
  parse-xml('<a><b c="xxx"/></a>'),
  map {"whitespace": "normalize"}
)
