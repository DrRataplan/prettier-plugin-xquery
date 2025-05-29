declare namespace ns = "http://example.com/ANamespace";

string(<name xmlns:ns="http://example.com/BNamespace">{
    namespace-uri-from-QName("ns:foo" cast as xs:QName)
  }</name>)
