deep-equal(
  parse-xml('<a xmlns="http://one/"><b/></a>'),
  parse-xml('<p:a xmlns:p="http://one/"><p:b/></p:a>')
)
