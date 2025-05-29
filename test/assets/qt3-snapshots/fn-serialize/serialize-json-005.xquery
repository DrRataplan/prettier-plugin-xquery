let $params := map {"method": "json", "indent": true()},
  $arg := parse-json('{"abc":true}')
return serialize($arg, $params)
