deep-equal(
  parse-xml('<a xml:base="http://example.com/one"><b>42</b></a>')//b,
  parse-xml('<a xml:base="http://example.com/two"><b>42</b></a>')//b,
  map {"base-uri": true()}
)
