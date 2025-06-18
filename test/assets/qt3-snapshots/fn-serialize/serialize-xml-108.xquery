let $params := map {
  "method": "xml",
  "indent": true(),
  "suppress-indentation": QName("", "p")
}
return serialize(., $params)
