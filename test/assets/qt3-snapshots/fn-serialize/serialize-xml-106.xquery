let $params :=
  map {
    "method": "xml",
    "indent": true(),
    "cdata-section-elements":
      (
        QName("http://www.saxonica.com", "a"),
        QName("http://www.saxonica.com", "b"),
        QName("", "c")
      )
  }
return serialize(., $params)
