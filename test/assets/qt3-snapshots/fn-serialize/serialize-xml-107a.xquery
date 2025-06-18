let $params := map {
  "method": "xml",
  "indent": true(),
  QName("http://vendor.example.com/", "xindent"): true()
}
return serialize(., $params)
