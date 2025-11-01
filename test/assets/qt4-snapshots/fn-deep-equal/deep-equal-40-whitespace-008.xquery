deep-equal(
  parse-xml("<a>  </a>"),
  parse-xml("<a/>"),
  map {"whitespace": "normalize"}
)
