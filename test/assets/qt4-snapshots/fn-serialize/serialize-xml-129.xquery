let $params := map {"omit-xml-declaration": false(), "standalone": false()}
return serialize(., $params)
