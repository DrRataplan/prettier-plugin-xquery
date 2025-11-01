deep-equal(
  parse-xml("<a><b/></a>"),
  parse-xml('<a xmlns:p="http://one/"><b/></a>')
)
