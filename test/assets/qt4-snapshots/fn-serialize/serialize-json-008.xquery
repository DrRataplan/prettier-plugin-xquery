let $params := map {"method": "json", "json-node-output-method": "xml"},
  $s := serialize(comment { " hello world " }, $params)
return matches($s, '"<!-- hello world -->"')
