let $params := map {"use-character-maps": map {"$": "£"}}
return serialize(., $params)
