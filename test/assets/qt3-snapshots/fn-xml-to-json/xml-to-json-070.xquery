let $x :=
  json-to-xml('[{ "givenNames": ["Michael", "Howard"], "surname": "Kay"}]')
return xml-to-json($x//*[@key = "givenNames"])
