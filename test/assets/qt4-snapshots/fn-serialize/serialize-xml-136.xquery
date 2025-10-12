let $params := map {
  "method": "xml",
  "version": "1.1",
  "omit-xml-declaration": false(),
  "undeclare-prefixes": false()
}
return serialize(., $params)
