declare function local:clarkname ($q as xs:QName) as xs:string {
  concat("{", namespace-uri-from-QName($q), "}", local-name-from-QName($q))
};

local:clarkname(xs:untypedAtomic("xs:integer"))
