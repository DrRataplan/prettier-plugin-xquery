declare function local:foo ($arg) as xs:boolean {
  $arg
};

local:foo(xs:untypedAtomic("false"))
