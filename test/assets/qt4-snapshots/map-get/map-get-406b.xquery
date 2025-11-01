map {}
  => map:put(xs:hexBinary("ff"), "TTT")
  => map:get(xs:base64Binary("/w=="))
  => string()
