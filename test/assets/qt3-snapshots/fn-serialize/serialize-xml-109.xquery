let $params := map {
  "method": "xml",
  "indent": "maybe",
  "suppress-indentation": "p"
}
return serialize(., $params)
