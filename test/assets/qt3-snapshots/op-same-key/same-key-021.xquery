map {
  fn:true(): 1,
  fn:false(): 2,
  xs:hexBinary("ff"): 3,
  xs:base64Binary(xs:hexBinary("ff")): 4,
  xs:duration("P12M"): 5,
  QName((), "abc"): 6,
  QName("http://example.org", "abc"): 7
}
