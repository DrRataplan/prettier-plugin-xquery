declare default element namespace "http://example.com/";

declare namespace p = "http://example.com/2";

<e xmlns="" xmlns:p="http://example.com/3">[{
  namespace-uri-from-QName(xs:QName("n1"))
}|{
  namespace-uri-from-QName(xs:QName("p:n2"))
}]</e>/text()
