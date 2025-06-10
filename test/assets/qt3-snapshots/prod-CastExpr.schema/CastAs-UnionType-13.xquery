import schema namespace s =  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($f as function(*)) as item()* {
  <a xmlns:pre="http://example.com/ns">{
    namespace-uri-from-QName($f("pre:local"))
  }</a>
};

local:f(function-lookup(xs:QName("s:sensitiveUnion"), 1))
