declare function local:clarkname ($q as xs:NOTATION) as xs:string {
  $q cast as xs:string
};

local:clarkname(<tag>xs:integer</tag>)
