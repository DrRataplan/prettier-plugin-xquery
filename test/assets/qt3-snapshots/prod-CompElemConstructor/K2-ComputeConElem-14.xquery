declare function local:addNamespace (
  $argElement as element(),
  $argPrefix as xs:string,
  $namespaceURI as xs:string
) as element() {
  element {QName($namespaceURI, concat($argPrefix, ":x"))} {
    $argElement
  }/*
};

local:addNamespace(<a><b/></a>, "prefix", "http://example.com/")
