let $params := map {
  "indent": true(),
  QName("http://example.com/xslt-xquery-serialization", "indent-spaces"): "2"
}
return serialize(., $params)
