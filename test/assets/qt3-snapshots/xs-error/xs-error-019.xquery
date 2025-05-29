declare function local:constant ($arg as xs:error) {
  fn:true()
};

local:constant(fn:error())
