let $params := map {
  QName("http://example.com/xslt-xquery-serialization", "indent-spaces"): "3",
  QName("http://example.com/xslt-xquery-serialization", "indent-spaces"): "2"
}
return serialize(., $params)
