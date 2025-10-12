declare function local:foo2 ($i as xs:string) as xs:string {
  local:foo($i)
};

declare function local:foo ($i as xs:string) as xs:string {
  $i
};

local:foo2("abc")
