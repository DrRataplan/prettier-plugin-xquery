let $params := map {"omit-xml-declaration": false(), "standalone": " omit "}
return serialize(., $params)
