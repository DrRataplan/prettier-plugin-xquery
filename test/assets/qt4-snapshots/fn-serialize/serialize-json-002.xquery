let $params := map {"method": "json"}, $arg := array { 1, 2, (3, 4, 5), 6 }
return serialize($arg, $params)
