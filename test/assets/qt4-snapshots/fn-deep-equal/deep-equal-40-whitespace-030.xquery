deep-equal(
  parse-xml("<a> <b/> </a>"),
  parse-xml("<a><b/></a>"),
  map {"whitespace": "strip"}
)
