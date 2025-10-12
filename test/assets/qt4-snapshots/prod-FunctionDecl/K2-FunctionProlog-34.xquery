declare function local:foo ($arg) as xs:boolean* {
  $arg
};

local:foo((true(), xs:untypedAtomic("false"))),
local:foo((false(), xs:untypedAtomic("false")))
