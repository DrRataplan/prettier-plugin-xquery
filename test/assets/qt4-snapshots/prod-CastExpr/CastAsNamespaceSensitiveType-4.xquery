declare function local:clarkname ($q as xs:NOTATION) as xs:string {
  $q cast as xs:string
};

local:clarkname(xs:untypedAtomic("xs:integer"))
