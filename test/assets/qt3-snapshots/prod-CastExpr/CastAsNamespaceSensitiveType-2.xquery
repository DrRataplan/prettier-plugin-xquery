declare function local:clarkname ($q as xs:QName) as xs:string {
  concat("{", namespace-uri-from-QName($q), "}", local-name-from-QName($q))
};

local:clarkname(<tag>xs:integer</tag>)
