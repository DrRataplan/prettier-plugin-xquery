deep-equal(
  parse-xml('<a xml:space="preserve"><b> </b></a>'),
  parse-xml('<a xml:space="preserve"><b/></a>'),
  map {"whitespace": "strip"}
)
