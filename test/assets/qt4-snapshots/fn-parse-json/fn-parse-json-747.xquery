"null"
  => parse-json(map {"null": xs:QName("fn:null")})
  => serialize(map {"method": "json", "indent": false()})
