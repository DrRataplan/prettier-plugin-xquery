let $params :=
  map {"method": "xml", "version": "1.1", "undeclare-prefixes": true()}
return serialize(., $params)
