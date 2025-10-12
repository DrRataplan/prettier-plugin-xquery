declare function local:foo ($arg) as xs:boolean* {
  $arg
};

local:foo(
  (<e>true</e>, true(), xs:untypedAtomic("false"), false(), <e> true </e>)
)
