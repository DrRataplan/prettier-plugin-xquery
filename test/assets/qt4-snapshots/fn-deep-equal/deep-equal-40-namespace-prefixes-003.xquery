deep-equal(
  parse-xml('<a xmlns:p="http://one/"><b p:foo="bar"/></a>'),
  parse-xml('<a xmlns:q="http://one/"><b q:foo="bar"/></a>')
)
