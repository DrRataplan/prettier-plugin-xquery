let $params :=
  map {
    "method": "xml",
    "cdata-section-elements":
      (QName("", "b"), QName("http://www.example.org/ns/p", "b")),
    "suppress-indentation": QName("", "para")
  }
return serialize(., $params)
