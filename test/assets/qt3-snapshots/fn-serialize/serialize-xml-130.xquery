let $params := map {"omit-xml-declaration": false(), "standalone": true()}
return serialize(., $params)
