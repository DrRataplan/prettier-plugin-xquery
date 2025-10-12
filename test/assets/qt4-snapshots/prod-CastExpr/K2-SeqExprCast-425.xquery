string-join(
  (
    "START",
    string(QName("http://example.com", "prefix:localName")),
    string(QName("http://example.com", "localName")),
    string(QName("http://example.com", "localName")),
    string(QName("", "localName")),
    string(QName((), "localName")),
    "END"
  ),
  " "
)
