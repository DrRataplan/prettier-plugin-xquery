deep-equal(
  parse-xml('<a> <b c="x x x"/> </a>'),
  parse-xml('<a><b c=" x  x  x "/></a>'),
  map {"whitespace": "normalize"}
)
