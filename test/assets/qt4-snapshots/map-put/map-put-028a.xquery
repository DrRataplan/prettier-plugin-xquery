map {}
  => map:put(xs:hexBinary(""), true())
  => map:put(xs:base64Binary(""), false())
  => map:size()
